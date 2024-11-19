import { useAppContext } from "../../../../context/AppContext";

export const useRouteStatistics = () => {
  const { duration, distanceMeters } = useAppContext();
  const durationFormatted = formatTime(duration);
  const distanceFormatted = formatDistance(distanceMeters);

  return { duration: durationFormatted, distance: distanceFormatted };
};

function formatDistance(distance: number | null): number | null {
  if (distance === null) return null;

  const distanceKilometers = distance / 1000;
  const distanceRounded = Math.round(distanceKilometers * 100) / 100;

  return distanceRounded;
}

function formatTime(time: number | null): string | null {
  if (time === null) return null;

  const hoursRaw = Math.floor(time / 3600);
  const minutesRaw = Math.floor((time % 3600) / 60);
  const secondsRaw = Math.floor(time % 60);

  const hours = hoursRaw < 10 ? "0" + hoursRaw : hoursRaw;
  const minutes = minutesRaw < 10 ? "0" + minutesRaw : minutesRaw;
  const seconds = secondsRaw < 10 ? "0" + secondsRaw : secondsRaw;

  return `${hours}:${minutes}:${seconds}`;
}
