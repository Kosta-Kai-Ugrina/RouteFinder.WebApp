import { Address } from "../context/AddressContext";
import axios from "axios";

const API_URL =
  "https://routefinderapi-gacyatghdxb0dafz.westeurope-01.azurewebsites.net/";

// const API_URL = "http://localhost:5295";

export async function testConnection(): Promise<string> {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function findFastestRoute(
  addressStart: Address,
  addressDestinationList: Address[]
): Promise<Address[]> {
  try {
    const response = await axios.post(`${API_URL}/fastest-route`, {
      addressStart,
      addressDestinationList,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
