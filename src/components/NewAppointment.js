import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import DateTimePicker from "react-datetime-picker";
import { Container, Row, Col } from "react-bootstrap";
import { postData, getProb } from "../lib/api"


function NewAppointment(props) {
  const [prob, setProb] = useState("");

  /*
  patientid
  appointmentid
  sex (M or F)
  scheduledday (datetime when appointment was made)
  appointment day (datetime)
  age (years)
  neighbourhood (from list of training neighbourhoods)
  scholarship (1 or 0,  receiving welfare payments)
  hypertension (1 or 0)
  diabetes (1 or 0)
  */

  const neighbourhoodsList = [
    "NEIGHBOURHOOD 1",
    "NEIGHBOURHOOD 2",
    "NEIGBOURHOOD 3",
  ];
  const neighbourhoods = neighbourhoodsList.map((neighbourhood) => (
    <option value={neighbourhood}>{neighbourhood}</option>
  ));

  return (
    <div>
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
          values.submissionTime = new Date();
          console.log(values);
          await postData(values);
          let res = await getProb();
          console.log(res);
          setProb(res);
        }}
      >
        {(props) => (
          <Form>
            <fieldset>
              <h1>Patient Information</h1>
              <label htmlFor="firstName">Patient first name</label>
              <Field name="firstName" id="firstName" />
              <label htmlFor="lastName">Patient last name</label>
              <Field name="lastName" id="lastName" />
              <label htmlFor="sex">Patient sex</label>
              <Field as="select" name="sex" id="sex">
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Field>
              <label htmlFor="age">Patient age</label>
              <Field type="number" min="0" max="200" id="age" name="age" />
              <label htmlFor="neighbourhood">Home neighbourhood</label>
              <Field as="select" name="neighbourhood" id="neighbourhood">
                {neighbourhoods}
              </Field>
              <label htmlFor="scholarship">Receiving welfare support</label>
              <Field as="select" name="scholarship" id="scholarship">
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </Field>

              <label htmlFor="diabetes">Diabetes</label>
              <Field as="select" name="diabetes" id="diabetes">
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </Field>

              <label htmlFor="hypertension">Hypertension</label>
              <Field as="select" name="hypertension" id="hypertension">
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </Field>
            </fieldset>

            <fieldset>
              <label htmlFor="appointmentTime">Appointment date and time</label>
              <DateTimePicker
                name="appointmentTime"
                id="appointmentTime"
                value={props.values.appointmentTime}
                onChange={(value) => {
                  props.setFieldValue("appointmentTime", value);
                }}
              />
            </fieldset>
            <button type="submit" value="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {prob && <Container fluid>
        <Row>
          <Col>
            <h3> The Probability of a Patient Not Showing :</h3>
            <h4>{prob}%</h4>
          </Col>
        </Row>
      </Container>}
    </div>
  );
}

export default NewAppointment;
