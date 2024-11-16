import axios from "axios";
import { RouteResponse, RouteResponseRaw } from "../types";
import * as polylineFunctions from "polyline";

async function fetch<T, U>(method: "get" | "post", url: string, data?: T) {
  try {
    const response = await (method == "get"
      ? axios.get(url)
      : axios.post(url, data));
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function get<T, U>(url: string): Promise<U> {
  return fetch("get", url);
}

export async function post<T, U>(url: string, data: T): Promise<U> {
  return fetch("post", url, data);
}

export function toPolylinePath(polylineEncoded: string): google.maps.LatLng[] {
  const polylineDecoded = polylineFunctions.decode(polylineEncoded);
  const toLatLng = (x: number[]) =>
    new google.maps.LatLng({ lat: x[0], lng: x[1] });
  const polyLinePathGoogleFormat = polylineDecoded.map(toLatLng);
  return polyLinePathGoogleFormat;
}

export function toRouteResponse(
  routeResponseRaw: RouteResponseRaw
): RouteResponse {
  const {
    distanceMeters,
    duration,
    polyline: { encodedPolyline },
  } = routeResponseRaw.routes[0];
  return {
    distanceMeters: distanceMeters,
    duration: parseDuration(duration),
    polyline: toPolylinePath(encodedPolyline),
  };
}

function parseDuration(durationRaw: string): number {
  const timeUnitRemoved = durationRaw.substring(0, durationRaw.length - 1);
  const durationNumber = parseInt(timeUnitRemoved);
  return durationNumber;
}
