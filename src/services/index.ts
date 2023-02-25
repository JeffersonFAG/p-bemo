import axios from "axios";

export const getItems = async (URL: string) => {
  const res = await axios.get(URL);
  return res.data;
};
