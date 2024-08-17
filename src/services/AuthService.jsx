import axios from "axios";
const API_BASE_URL = "http://localhost:8080/patient";

// Function to handle registration
export const registerAPICall = async (registerObj, role) => {
    try {
        const endpoint = role === "doctor" 
            ? `${API_BASE_URL}/doctor/register` 
            : `${API_BASE_URL}/patient/register`;
        const response = await axios.post(endpoint, registerObj); 
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

// Function to handle login
export const loginAPICall = async (email, password, role, medLic = "") => {
    try {
        const endpoint = role === "doctor" 
            ? `${API_BASE_URL}/doctor/login` 
            : `${API_BASE_URL}/patient/login`;
        const response = await axios.post(endpoint, { email, password, medLic }); 
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};
