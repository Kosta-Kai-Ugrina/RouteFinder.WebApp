import { Address } from "../types";

export function toLatLng(address: Address): google.maps.LatLng | null {
  if (address.latitude === undefined || address.latitude === undefined) {
    return null;
  }

  return new google.maps.LatLng({
    lat: address.latitude!,
    lng: address.longitude!,
  });
}
