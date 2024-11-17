import { Address } from "../types";

export function toAddress(place: google.maps.places.PlaceResult): Address {
  return {
    name: place.formatted_address,
    latitude: place.geometry?.location?.lat(),
    longitude: place.geometry?.location?.lng(),
  };
}
