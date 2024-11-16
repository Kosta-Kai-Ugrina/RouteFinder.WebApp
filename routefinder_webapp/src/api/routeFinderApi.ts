import { RouteRequest, RouteResponse, RouteResponseRaw } from "../types";
import { get, post, toRouteResponse } from "./apiUtils";
import {
  exampleWrongOrder1,
  exampleWrongOrder2,
} from "./routeFinderApiTestExampleData";

const API_URL_LOCALHOST = process.env.REACT_APP_ROUTEFINDER_API_URL_LOCALHOST;
// const API_URL = process.env.REACT_APP_ROUTEFINDER_API_URL;
const API_URL = API_URL_LOCALHOST;

export async function findOptimalAddressOrder(
  routeRequest: RouteRequest
): Promise<RouteRequest> {
  return post(`${API_URL}/optimal-address-order`, routeRequest);
}

export async function findFastestRoute(
  routeRequest: RouteRequest
): Promise<RouteResponse> {
  const data = await post<RouteRequest, RouteResponseRaw>(
    `${API_URL}/fastest-route`,
    routeRequest
  );
  const dataFormatted = toRouteResponse(data);
  return dataFormatted;
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
