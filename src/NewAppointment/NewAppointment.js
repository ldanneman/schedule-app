import React from "react";
import { Formik, Form, Field } from "formik";
import DateTimePicker from "react-datetime-picker";

function NewAppointment(props) {

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
          sex: "F",
          age: 20,
          neighbourhood: null,
          scholarship: 0,
          diabetes: 0,
          hypertension: 0,
          datetime: new Date(),
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form>
            <fieldset>
              <h1>Patient Information</h1>
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
              <label htmlFor="datetime">Appointment date and time</label>
              <DateTimePicker
                name="datetime"
                id="datetime"
                value={props.values.datetime}
                onChange={(value) => {
                  props.setFieldValue("datetime", value);
                }}
              />
            </fieldset>
            <button type="submit" value="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewAppointment;
