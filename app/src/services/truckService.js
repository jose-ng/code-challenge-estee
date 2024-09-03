import axios from "axios";
import { API_DOMAIN } from "../utils/domains";

async function getTrucks(offset, limit = 100) {
  const response = await axios.get(API_DOMAIN + "/trucks", {
    params: {
      offset,
      limit,
    },
  });

  return response.data;
}

export { getTrucks };
