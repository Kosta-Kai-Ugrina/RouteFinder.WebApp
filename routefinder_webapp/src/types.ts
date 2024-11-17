export interface Address {
  name?: string;
  latitude?: number;
  longitude?: number;
}

export interface RouteRequest {
  addressStart: Address;
  addressDestinationList: Address[];
}

export interface RouteResponseRaw {
  routes: [
    {
      distanceMeters: number;
      duration: string;
      polyline: { encodedPolyline: string };
    }
  ];
}

export interface RouteResponse {
  distanceMeters: number;
  duration: number;
  polyline: google.maps.LatLng[];
}

export function validationFail(error: string): RequestValidationResult {
  return {
    isValid: false,
    error,
  };
}

export function validationSuccess(): RequestValidationResult {
  return {
    isValid: true,
  };
}

export interface RequestValidationResult {
  isValid: boolean;
  error?: string;
}

export type IconType = "warehouse" | "deliveryAddress";
