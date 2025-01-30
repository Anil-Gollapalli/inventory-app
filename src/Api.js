import axios from "axios";
const API_URL = "http://localhost:5000";
export const getCategories = () => axios.get(`${API_URL}/categories`);
export const getItems = () => axios.get(`${API_URL}/items`);
export const createCategory = (data) => axios.post(`${API_URL}/categories`, data);
export const createItem = (data) => axios.post(`${API_URL}/items`, data);
export const deleteCategory = (id) => axios.delete(`${API_URL}/categories/${id}`);
export const deleteItem = (id) => axios.delete(`${API_URL}/items/${id}`);
