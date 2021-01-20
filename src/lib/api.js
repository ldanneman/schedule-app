import axios from "axios";

const baseUrl = "http://localhost:5000";
//const baseUrl = "https://schedule-app-hackathon.herokuapp.com/";


export async function getAllMeetings() {
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
        const response = await axios.post(baseUrl + "/calendar", {
            firstName: formData.firstName,
            lastName: formData.lastName,
            sex: formData.sex,
            age: formData.age,
            neighborhood: formData.neighborhood,
            scholarship: formData.scholarship,
            diabetes: formData.diabetes,
            hypertension: formData.hypertension,
            submissionTime: formData.submissionTime,
            appointmentTime: formData.appointmentTime,
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}
