// api/cannabisApi.js
import axios from 'axios';

const apiUrl = 'http://localhost:3001/onelove';

const getCannabisData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const addCannabis = async (newCannabis) => {
  try {
    const response = await axios.post(`${apiUrl}/add`, newCannabis);
    console.log(response.data);
  } catch (error) {
    console.error('Error adding cannabis:', error);
    throw error;
  }
};

const updateCannabis = async (id, updatedCannabis) => {
  try {
    const response = await axios.put(`${apiUrl}/update/${id}`, updatedCannabis);
    console.log(response.data);
  } catch (error) {
    console.error('Error updating cannabis:', error);
    throw error;
  }
};

const deleteCannabis = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/delete/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error deleting cannabis:', error);
    throw error;
  }
};

export { getCannabisData, addCannabis, updateCannabis, deleteCannabis };
