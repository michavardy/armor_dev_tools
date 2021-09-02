
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:80",
});

export const getDummyData= async () => {
  const { data } = await instance.get("/dummy");
  return data;
};

