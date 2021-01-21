import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import DateTimePicker from "react-datetime-picker";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { postData, getProb } from "../../lib/api";
import { useHistory } from "react-router-dom";
import "./form.css";

function NewAppointment(props) {
  const [prob, setProb] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleProceed = () => {
    // Something to do
    history.push("/calendar");
  };

  const neighbourhoodsList = [
    "JARDIM DA PENHA",
    "MATA DA PRAIA",
    "PONTAL DE CAMBURI",
    "REPÚBLICA",
    "GOIABEIRAS",
    "ANDORINHAS",
    "CONQUISTA",
    "NOVA PALESTINA",
    "DA PENHA",
    "TABUAZEIRO",
    "BENTO FERREIRA",
    "SÃO PEDRO",
    "SANTA MARTHA",
    "SÃO CRISTÓVÃO",
    "MARUÍPE",
    "GRANDE VITÓRIA",
    "SÃO BENEDITO",
    "ILHA DAS CAIEIRAS",
    "SANTO ANDRÉ",
    "SOLON BORGES",
    "BONFIM",
    "JARDIM CAMBURI",
    "MARIA ORTIZ",
    "JABOUR",
    "ANTÔNIO HONÓRIO",
    "RESISTÊNCIA",
    "ILHA DE SANTA MARIA",
    "JUCUTUQUARA",
    "MONTE BELO",
    "MÁRIO CYPRESTE",
    "SANTO ANTÔNIO",
    "BELA VISTA",
    "PRAIA DO SUÁ",
    "SANTA HELENA",
    "ITARARÉ",
    "INHANGUETÁ",
    "UNIVERSITÁRIO",
    "SÃO JOSÉ",
    "REDENÇÃO",
    "SANTA CLARA",
    "CENTRO",
    "PARQUE MOSCOSO",
    "DO MOSCOSO",
    "SANTOS DUMONT",
    "CARATOÍRA",
    "ARIOVALDO FAVALESSA",
    "ILHA DO FRADE",
    "GURIGICA",
    "JOANA D´ARC",
    "CONSOLAÇÃO",
    "PRAIA DO CANTO",
    "BOA VISTA",
    "MORADA DE CAMBURI",
    "SANTA LUÍZA",
    "SANTA LÚCIA",
    "BARRO VERMELHO",
    "ESTRELINHA",
    "FORTE SÃO JOÃO",
    "FONTE GRANDE",
    "ENSEADA DO SUÁ",
    "SANTOS REIS",
    "PIEDADE",
    "JESUS DE NAZARETH",
    "SANTA TEREZA",
    "CRUZAMENTO",
    "ILHA DO PRÍNCIPE",
    "ROMÃO",
    "COMDUSA",
    "SANTA CECÍLIA",
    "VILA RUBIM",
    "DE LOURDES",
    "DO QUADRO",
    "DO CABRAL",
    "HORTO",
    "SEGURANÇA DO LAR",
    "ILHA DO BOI",
    "FRADINHOS",
    "NAZARETH",
    "AEROPORTO",
    "ILHAS OCEÂNICAS DE TRINDADE",
    "PARQUE INDUSTRIAL",
  ];
  const neighbourhoods = neighbourhoodsList.map((neighbourhood) => (
    <option value={neighbourhood}>{neighbourhood}</option>
  ));

  return (
    <div className="container form">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          sex: "F",
          age: 20,
          neighbourhood: "JARDIM DA PENHA",
          scholarship: 0,
          diabetes: 0,
          hypertension: 0,
          missed: 0,
          appointmentTime: new Date(),
          description: "",
        }}
        onSubmit={async (values, actions) => {
          let form = values;
          console.log(values);
          form.location = "123 Doctor Place";
          form.colorId = 1;
          setLoading(true);
          let res = await postData(form);
          setProb(res);
          setLoading(false);
        }}
      >
        {(props) => (
          <Form>
            <h1 className="form-header pb-2 ">Patient Information</h1>
            <div className="form-grid">
              <fieldset>
                <div className="rows">
                  <label
                    className="form-item-label grid gr1"
                    htmlFor="firstName"
                  >
                    Patient first name
                  </label>
                  <Field
                    className="form-item grid gr2"
                    name="firstName"
                    id="firstName"
                  />
                </div>
                <div className="rows">
                  <label
                    className="form-item-label grid gr3"
                    htmlFor="lastName"
                  >
                    Patient last name
                  </label>
                  <Field
                    className="form-item grid gr4"
                    name="lastName"
                    id="lastName"
                  />
                </div>
                <div className="rows">
                  <label className="form-item-label grid" htmlFor="sex">
                    Patient sex
                  </label>
                  <Field
                    className="form-item grid"
                    as="select"
                    name="sex"
                    id="sex"
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </Field>
                </div>
                <div className="rows">
                  <label className="form-item-label grid" htmlFor="age">
                    Patient age
                  </label>
                  <Field
                    className="form-item grid"
                    type="number"
                    min="0"
                    max="200"
                    id="age"
                    name="age"
                  />
                </div>
                <div className="rows">
                  <label
                    className="form-item-label grid"
                    htmlFor="neighbourhood"
                  >
                    Home neighbourhood
                  </label>
                  <Field
                    className="form-item grid"
                    as="select"
                    name="neighbourhood"
                    id="neighbourhood"
                  >
                    {neighbourhoods}
                  </Field>
                </div>
                <div className="rows">
                  <label className="form-item-label grid" htmlFor="scholarship">
                    Receiving welfare support
                  </label>
                  <Field
                    className="form-item grid"
                    as="select"
                    name="scholarship"
                    id="scholarship"
                  >
                    <option value={0}>No</option>
                    <option value={1}>Yes</option>
                  </Field>
                </div>
                <div className="rows">
                  <label className="form-item-label grid" htmlFor="diabetes">
                    Diabetes
                  </label>
                  <Field
                    className="form-item grid"
                    as="select"
                    name="diabetes"
                    id="diabetes"
                  >
                    <option value={0}>No</option>
                    <option value={1}>Yes</option>
                  </Field>
                </div>
                <div className="rows">
                  <label
                    className="form-item-label grid"
                    htmlFor="hypertension"
                  >
                    Hypertension
                  </label>
                  <Field
                    className="form-item grid"
                    as="select"
                    name="hypertension"
                    id="hypertension"
                  >
                    <option value={0}>No</option>
                    <option value={1}>Yes</option>
                  </Field>
                </div>
              </fieldset>
              <div className="rows">
                <label className="form-item-label grid" htmlFor="missed">
                  Number of Previous Missed Appointments
                </label>
                <Field
                  className="form-item grid"
                  type="number"
                  min="0"
                  max="200"
                  id="missed"
                  name="missed"
                />
              </div>
              <fieldset>
                <label
                  className="form-item-label grid"
                  htmlFor="appointmentTime"
                >
                  Appointment date and time
                </label>
                <div className="grid">
                  <DateTimePicker
                    name="appointmentTime"
                    id="appointmentTime"
                    value={props.values.appointmentTime}
                    onChange={(value) => {
                      props.setFieldValue("appointmentTime", value);
                    }}
                  />
                </div>
              </fieldset>
              <div className="rows">
                <label className="form-item-label grid" htmlFor="description">
                  Description
                </label>
                <Field
                  as="textarea"
                  className="form-item grid"
                  name="description"
                  id="description"
                />
              </div>
            </div>
            <button
              className="btn btn-primary btn-form"
              type="submit"
              value="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {loading && (
        <Spinner animation="border" role="status" variant="info">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {prob && (
        <Container fluid>
          <Row>
            <Col>
              <h3> The Probability of a Patient Showing Up :</h3>
              <h4>{prob}%</h4>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <h3> Proceed to set an appointment on {appointment}</h3>
              <button className="btn" onClick={handleProceed}>
                Book
              </button>
            </Col>
          </Row> */}
        </Container>
      )}
    </div>
  );
}

export default NewAppointment;

// const event = {
//     summary: `Meeting with David`,
//     location: `3595 California St, San Francisco, CA 94118`,
//     description: `Meet with David to talk about the new client project and how to integrate the calendar for booking.`,
//     colorId: 1,
//     start: {
//       dateTime: eventStartTime,
//       timeZone: "America/Denver",
//     },
//     end: {
//       dateTime: eventEndTime,
//       timeZone: "America/Denver",
//     },
//   }
