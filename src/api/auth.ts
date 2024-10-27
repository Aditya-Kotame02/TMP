import axios from 'axios';
import { API_URL } from './config';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};