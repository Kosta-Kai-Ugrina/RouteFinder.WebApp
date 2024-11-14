export interface Address {
  name?: string;
  latitude?: number;
  longitude?: number;
}

export interface RouteRequest {
  addressStart: Address;
  addressDestinationList: Address[];
}
