import axios from "axios";

// const baseUrl = process.env.API_BASE_URL;
const baseUrl = "http://localhost:4000";

export const LoginService = async (username, password) => {
  try {
    let res = await axios({
      url: baseUrl + "/login",
      method: "post",
      timeout: 8000,
      headers: {},
      data: {
        username,
        password,
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
