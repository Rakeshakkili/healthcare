import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/patient';

const registerPatient = async (patient) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/patient/register`, patient);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : "Registration failed");
  }
};

const loginPatient = async (email, password) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/patient/login`, {
      params: { email, password }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : "Login failed");
  }
};

const loginDoctor = async (email, password) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/doctor/login`, {
      params: { email, password }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : "Login failed");
  }
};

const AuthService = {
  registerPatient,
  loginPatient,
  loginDoctor,
};

export default AuthService;
