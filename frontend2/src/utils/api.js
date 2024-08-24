import axios from "axios";

export const sendMouseDataToAPI = (data) => {
  axios
    .post("http://localhost:4000/mouse-data", data)
    .then((response) => {
      console.log("Success:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
