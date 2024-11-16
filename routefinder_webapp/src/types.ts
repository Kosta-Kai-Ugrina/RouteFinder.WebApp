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
