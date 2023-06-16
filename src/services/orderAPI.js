import axios from "axios";

axios.defaults.baseURL = "https://neonlight.onrender.com/";

export async function addOrder(formData) {
  try {
    const response = await axios.post("orders", formData);
    return response;
  } catch (error) {
    throw error;
  }
}
