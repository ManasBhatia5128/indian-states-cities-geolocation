import locationsData from './data.json' with { type: 'json' };

/**
 * Returns the entire dataset.
 */
export function getAllData() {
  return locationsData;
}

/**
 * Returns an array of all state names.
 */
export function getAllStates() {
  return locationsData.map(item => item.state);
}

/**
 * Returns an array of all cities/districts for a given state.
 * @param {string} stateName - The name of the state.
 */
export function getCitiesByState(stateName) {
  if (!stateName) return [];
  
  const stateData = locationsData.find(
    item => item.state.toLowerCase() === stateName.toLowerCase()
  );
  
  return stateData ? stateData.districts : [];
}

/**
 * Returns the latitude and longitude for a specific city/district within a state.
 * @param {string} stateName - The name of the state.
 * @param {string} cityName - The name of the city/district.
 */
export function getGeolocation(stateName, cityName) {
  if (!stateName || !cityName) return null;

  const cities = getCitiesByState(stateName);
  const cityData = cities.find(
    city => city.name.toLowerCase() === cityName.toLowerCase()
  );

  return cityData 
    ? { latitude: cityData.latitude, longitude: cityData.longitude } 
    : null;
}