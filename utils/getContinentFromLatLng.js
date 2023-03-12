export default function getContinentFromLatLng(lat, lng) {
  const continents = [
    {
      name: "Africa",
      bounds: [
        [-35.81, -25.36],
        [37.33, 63.39],
      ],
    },
    {
      name: "Antarctica",
      bounds: [
        [-85.06, -180],
        [-60.52, 180],
      ],
    },
    {
      name: "Asia",
      bounds: [
        [0.17, 26.7],
        [77.81, 180],
      ],
    },
    {
      name: "Australia",
      bounds: [
        [-54.75, 112.92],
        [-10.06, 159.11],
      ],
    },
    {
      name: "Europe",
      bounds: [
        [34.54, -31.29],
        [71.18, 39.2],
      ],
    },
    {
      name: "North America",
      bounds: [
        [7.19, -170],
        [83, -50],
      ],
    },
    {
      name: "South America",
      bounds: [
        [-56, -94],
        [13, -34],
      ],
    },
  ];

  for (const continent of continents) {
    if (
      lat >= continent.bounds[0][0] &&
      lat <= continent.bounds[1][0] &&
      lng >= continent.bounds[0][1] &&
      lng <= continent.bounds[1][1]
    ) {
      return continent.name;
    }
  }

  return null;
}

// const test = ()=>{
//   ge
// }
// export default function getContinentFromLatLng(lat, lng) {
//   const continentLookup = {
//     "North America": { lat: [56.98, 7.1], lng: [-168.37, -47.39] },
//     "South America": { lat: [-56.29, 12.47], lng: [-87.19, -34.77] },
//     Africa: { lat: [-35.86, 37.54], lng: [-26.08, 57.62] },
//     Europe: { lat: [71.38, 34.03], lng: [-27.64, 61.57] },
//     Asia: { lat: [77.38, -10.12], lng: [23.68, 179.86] },
//     Oceania: { lat: [-46.7, -9.92], lng: [112.5, -172.56] },
//   };

//   for (const [continent, bounds] of Object.entries(continentLookup)) {
//     const latInRange = lat >= bounds.lat[0] && lat <= bounds.lat[1];
//     const lngInRange = lng >= bounds.lng[0] && lng <= bounds.lng[1];
//     if (latInRange && lngInRange) {
//       return continent;
//     }
//   }

//   return null;
// }
