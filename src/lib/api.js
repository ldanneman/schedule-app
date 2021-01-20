import axios from "axios";

const baseUrl = "http://localhost:5000";
//const baseUrl = "https://schedule-app-hackathon.herokuapp.com/";

export async function getGoogleConsentUrl() {
  try {
    const response = await axios.get(baseUrl + "/sign-in");
    const url = response.data;
    return url;
  } catch (error) {
    console.error(error);
  }
}

export async function googleAuth() {
  try {
    const response = await axios.get(baseUrl + "/oauth2callback");
    const authObject = response.data;
    return authObject;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllMeetings() {
  try {
    const response = await axios.get(baseUrl + "/calendar");
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProb() {
  try {
    const response = await axios.get(baseUrl + "/calendar");
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function setUpMeeting(event) {
  try {
    const response = await axios.post(baseUrl + "/calendar", {
      patientName: event.patientName,
      description: event.description,
      date: event.date,
      eventTime: event.eventTime,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function postData(formData) {
  try {
    console.log(formData);
    const response = await axios.post(baseUrl+"/set-event", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      sex: formData.sex,
      age: formData.age,
      neighborhood: formData.neighborhood,
      scholarship: formData.scholarship,
      diabetes: formData.diabetes,
      hypertension: formData.hypertension,
      submissionTime: formData.submissionTime,
      missed: formData.missed,
      appointmentTime: formData.appointmentTime,
    },
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("googleAuth"))
        }
      });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
