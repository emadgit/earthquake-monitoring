declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_MAP_API_KEY: string;
    }
  }
}

enum LoaderType {
  ThreeDots = "ThreeDots",
  InfinitySpin = "InfinitySpin",
  Oval = "Oval",
}

enum ReviewStatus {
  REVIEWED = "reviewed",
  AUTOMATIC = "automatic",
  DELETED = "deleted",
}

export interface EarthquakeData {
  bbox: Array<number>;
  features: Array<Feature>;
  metadata: object;
  type: string;
}

export interface Feature {
  type: string;
  properties: {
    place: string;
    time: Date;
    updated: Date;
    url: string;
    detail: string;
    title: string;
    status: string;
    type: string;
    mag: number;
    magType: string;
  };
  geometry: object;
  id: string;
}

export type EarthquakeDetailData = {
  geometry: Geometry;
  id: string;
  type: string;
  properties: EarthquakeDetailProperties;
};

interface EarthquakeDetailProperties {
  magType: string;
  mag: number;
  code: string;
  place: string;
  status: string;
  url: string;
  products: ProductProperty;
}

interface ProductProperty {
  "phase-data": Array<PhaseData>;
}

interface PhaseData {
  properties: PhaseDataProperty;
}

interface PhaseDataProperty {
  "azimuthal-gap": string;
  depth: string;
  "depth-type": string;
  "magnitude-error": string;
}

interface Geometry {
  coordinates: Array<number>;
  type: string;
}

export { LoaderType, ReviewStatus };
