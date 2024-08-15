import axios from "axios";
//const API_BASE_URL = "http://localhost:8080/api"; 

// Function to handle registration
export const registerAPICall = async (registerObj) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, registerObj);
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

// Function to handle login
export const loginAPICall = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};

/* Optional: Function to handle logout
export const logoutAPICall = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`);
        return response.data;
    } catch (error) {
        console.error("Error during logout:", error);
        throw error;
    }
};
*/