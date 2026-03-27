# Indian States and Cities geolocation

A comprehensive, lightweight, and offline package providing precise geolocation data (latitude and longitude) for all Indian states and their respective districts/cities. 

Perfect for mapping features, weather applications, distance calculators, and dropdown populating in your frontend or backend applications.

## Installation

Install the package via npm:

\`\`\`bash
npm install indian-states-and-cities-geolocation
\`\`\`

## Usage

Import the functions into your project using ES6 module syntax:

\`\`\`javascript
import { 
  getAllStates, 
  getCitiesByState, 
  getGeolocation 
} from 'indian-states-and-cities-geolocation';

// 1. Get a list of all states
const states = getAllStates();
console.log(states); 
// Output: ['Himachal Pradesh', 'Punjab', ...]

// 2. Get all cities/districts for a specific state (Case-insensitive)
const punjabCities = getCitiesByState('punjab');
console.log(punjabCities);
/* Output: 
[
  { name: 'Amritsar', latitude: 31.63, longitude: 74.87 },
  { name: 'Barnala', latitude: 30.38, longitude: 75.55 },
  ...
]
*/

// 3. Get exact coordinates for a specific city
const coordinates = getGeolocation('Himachal Pradesh', 'Shimla');
console.log(coordinates);
// Output: { latitude: 31.1, longitude: 77.17 }
\`\`\`

## API Reference

### \`getAllData()\`
Returns the entire raw JSON dataset.

### \`getAllStates()\`
Returns an array of strings representing all the states available in the dataset.

### \`getCitiesByState(stateName)\`
Returns an array of objects containing the \`name\`, \`latitude\`, and \`longitude\` of all districts/cities within the specified state.
* **stateName** (String): The name of the state. (e.g., `"Punjab"`). *This is case-insensitive.*

### \`getGeolocation(stateName, cityName)\`
Returns an object containing the \`latitude\` and \`longitude\` of the specified city. Returns \`null\` if the state or city is not found.
* **stateName** (String): The name of the state.
* **cityName** (String): The name of the city/district. *Both arguments are case-insensitive.*

## Data Structure Example
The underlying data is structured as follows:
\`\`\`json
[
  {
    "state": "Punjab",
    "districts": [
      { "name": "Amritsar", "latitude": 31.63, "longitude": 74.87 }
    ]
  }
]
\`\`\`

## License
MIT

---

## Author

**Manas Bhatia**
* LinkedIn: [manas-bhatia](https://www.linkedin.com/in/manas-bhatia)
* Email: [manasbhatia724@gmail.com](mailto:manasbhatia724@gmail.com)