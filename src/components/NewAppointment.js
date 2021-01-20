import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import DateTimePicker from "react-datetime-picker";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { postData, getProb } from "../lib/api"
import { useHistory } from "react-router-dom";


function NewAppointment(props) {
  const [prob, setProb] = useState("");
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  const [appointment, setAppointment] = useState('')


  const handleProceed = () => {
    // Something to do
    history.push("/calendar");
  }

  const neighbourhoodsList = [
    "NEIGHBOURHOOD 1",
    "NEIGHBOURHOOD 2",
    "NEIGBOURHOOD 3",
  ];
  const neighbourhoods = neighbourhoodsList.map((neighbourhood) => (
    <option value={neighbourhood}>{neighbourhood}</option>
  ));

  return (
    <div className="container-fluid">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          sex: "F",
          age: 20,
          neighbourhood: null,
          scholarship: 0,
          diabetes: 0,
          hypertension: 0,
          appointmentTime: new Date(),
        }}
        onSubmit={async (values, actions) => {
          setLoading(true);
          values.submissionTime = new Date();
          console.log(values);
          setAppointment(values.appointmentTime)
          await postData(values);
          let res = await getProb();
          console.log(res);
          setProb(res);
          setLoading(false);
        }}
      >
        {(props) => (
          <Form>
            <fieldset>
              <h1>Patient Information</h1>
              <div className="mb-3">
                <label className="form-item-label" htmlFor="firstName">Patient first name</label>
                <Field className="form-item" name="firstName" id="firstName" />
              </div>
              <div className="mb-3">
                <label className="form-item-label" htmlFor="lastName">Patient last name</label>
                <Field className="form-item" name="lastName" id="lastName" />
              </div>
              <div className="mb-3">
                <label className="form-item-label" htmlFor="sex">Patient sex</label>
                <Field className="form-item" as="select" name="sex" id="sex">
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </Field>
              </div>
              <div className="mb-3">
                <label className="form-item-label" htmlFor="age">Patient age</label>
                <Field className="form-item" type="number" min="0" max="200" id="age" name="age" />
              </div>
              <div className="mb-3">
                <label className="form-item-label" htmlFor="neighbourhood">Home neighbourhood</label>
                <Field className="form-item" as="select" name="neighbourhood" id="neighbourhood">
                  {neighbourhoods}
                </Field>
              </div>
              <div className="mb-3">
                <label className="form-item-label" htmlFor="scholarship">Receiving welfare support</label>
                <Field className="form-item" as="select" name="scholarship" id="scholarship">
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </Field>
              </div>
              <div className="mb-3">
                <label className="form-item-label" htmlFor="diabetes">Diabetes</label>
                <Field className="form-item" as="select" name="diabetes" id="diabetes">
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </Field>
              </div>
              <div className="mb-3">
                <label className="form-item-label" htmlFor="hypertension">Hypertension</label>
                <Field className="form-item" as="select" name="hypertension" id="hypertension">
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </Field>
              </div>
            </fieldset>

            <fieldset>
              <label className="form-item-label" htmlFor="appointmentTime">Appointment date and time</label>
              <DateTimePicker
                name="appointmentTime"
                id="appointmentTime"
                value={props.values.appointmentTime}
                onChange={(value) => {
                  props.setFieldValue("appointmentTime", value);
                }}
              />
            </fieldset>
            <button className="btn btn-primary btn-form" type="submit" value="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {loading &&
        <Spinner animation="border" role="status" variant="info">
          <span className="sr-only">Loading...</span>
        </Spinner>
      }
      {prob && <Container fluid>
        <Row>
          <Col>
            <h3> The Probability of a Patient Showing Up :</h3>
            <h4>{prob}%</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3> Proceed to set an appointment on {appointment}</h3>
            <button className='btn' onClick={handleProceed}>Book</button>
          </Col>
        </Row>
      </Container>}
    </div>
  );
}

export default NewAppointment;
