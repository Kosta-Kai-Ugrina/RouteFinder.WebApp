import { useEffect, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";

interface Props {
  value: string;
  onPlaceSelected?: (placeSelected: google.maps.places.PlaceResult) => void;
}

export const useSearchBox = ({ value, onPlaceSelected }: Props) => {
  const [textValue, setTextValue] = useState(value);
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const { ref } = usePlacesWidget({
    apiKey: apiKey,
    onPlaceSelected: (place) => {
      if (
        place === undefined ||
        place.formatted_address === undefined ||
        onPlaceSelected === undefined
      )
        return;

      onPlaceSelected(place);
    },
    options: {
      types: ["establishment"],
      fields: ["formatted_address", "geometry.location"],
    },
  });
  const updateTextOnPlaceSelect = () => setTextValue(value);
  useEffect(updateTextOnPlaceSelect, [value]);

  return { placeWidgetRef: ref, textValue, setTextValue };
};
