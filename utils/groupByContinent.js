import getContinentFromLatLng from "./getContinentFromLatLng";
export default function groupByContinent(positions) {
  const grouped = {};

  positions.forEach((position) => {
    const continent = getContinentFromLatLng(
      position.latitude,
      position.longitude
    );
    if (continent !== null) {
      if (!grouped[continent]) {
        grouped[continent] = [];
      }
      grouped[continent].push(position);
    }
  });

  return Object.entries(grouped).map(([continentName, positions]) => ({
    continentName,
    positions,
    positionLength: positions.length,
  }));
}
