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
  bbox: [number];
  features: [Feature];
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

export { LoaderType, ReviewStatus };
