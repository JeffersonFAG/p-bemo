import axios from "axios";

export const getItems = async (URL: string) => {
  if (URL) {
    try {
      const res = await axios.get(URL);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
};
