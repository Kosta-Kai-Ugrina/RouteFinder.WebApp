import { RouteRequest } from "../types";
import { get, post } from "./apiUtils";
import {
  exampleWrongOrder1,
  exampleWrongOrder2,
} from "./routeFinderApiTestExampleData";

// const API_URL =
//   "https://routefinderapi-gacyatghdxb0dafz.westeurope-01.azurewebsites.net/";

const API_URL = "http://localhost:5295";

export async function findOptimalAddressOrder(
  routeRequest: RouteRequest
): Promise<RouteRequest> {
  return post(`${API_URL}/optimal-address-order`, routeRequest);
}

export async function findFastestRoute(
  routeRequest: RouteRequest
): Promise<RouteRequest> {
  return post(`${API_URL}/fastest-route`, routeRequest);
}

export async function testConnection(): Promise<string> {
  return get(`${API_URL}`);
}

export async function testOptimizeWrongRoute1(): Promise<RouteRequest> {
  const example = exampleWrongOrder1;
  const response = await findOptimalAddressOrder(example);

  return response;
}

export async function testOptimizeWrongRoute2(): Promise<RouteRequest> {
  const example = exampleWrongOrder2;
  const response = await findOptimalAddressOrder(example);

  return response;
}
