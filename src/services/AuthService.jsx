import axios from "axios";
const API_BASE_URL = "http://localhost:8080/patient"; 

export const registerAPICall = async (registerObj, role) => {
    try {
        const queryParams = new URLSearchParams(registerObj).toString();
        const endpoint = role === "doctor" 
            ? `${API_BASE_URL}/doctor/register?${queryParams}` 
            : `${API_BASE_URL}/patient/register?${queryParams}`;
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

export const loginAPICall = async (email, password, role) => {
    try {
        const queryParams = new URLSearchParams({ email, password }).toString();
        const endpoint = role === "doctor" 
            ? `${API_BASE_URL}/doctor/login?${queryParams}` 
            : `${API_BASE_URL}/patient/login?${queryParams}`;
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};
