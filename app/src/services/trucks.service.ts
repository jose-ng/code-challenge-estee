import axios from "axios";
import { API_DOMAIN } from "../utils/domains";

async function getTrucks() {
  const response = await axios.get(API_DOMAIN + "/trucks", {
    params: {
      query: "Natan",
    },
  });
  
  return response.data;
}

export { getTrucks };
