import axios from "axios";

export const api = axios.create({
  baseURL: `http://${process.env.DB_HOST}:3333`
})