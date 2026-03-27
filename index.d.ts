// Define the shapes of your data
export interface District {
  name: string;
  latitude: number;
  longitude: number;
}

export interface StateData {
  state: string;
  districts: District[];
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

// Declare your functions and what they return
export declare function getAllData(): StateData[];

export declare function getAllStates(): string[];

export declare function getCitiesByState(stateName: string): District[];

export declare function getGeolocation(stateName: string, cityName: string): Coordinates | null;