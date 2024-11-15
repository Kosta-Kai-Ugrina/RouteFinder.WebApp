import * as polylineFunctions from "polyline";

export function toPolylinePath(polylineEncoded: string): google.maps.LatLng[] {
  const polylineDecoded = polylineFunctions.decode(polylineEncoded);
  const toLatLng = (x: number[]) =>
    new google.maps.LatLng({ lat: x[0], lng: x[1] });
  const polyLinePathGoogleFormat = polylineDecoded.map(toLatLng);
  return polyLinePathGoogleFormat;
}
