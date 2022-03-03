export interface HomeComponentParams {
  yiweiUrl?: string;
}

export interface HomeComponent {
  label: string;
  name: string;
  key?: string;
  "grid": {
    "w": number,
    "h": number,
    "x": number,
    "y": number,
  };
  params?: HomeComponentParams;
  style?: {
    color: string;
  };
}

export interface HomeDrawerComponent {
  label: string;
  key?: string;
  description?: string;
  icon?: string;
  children: HomeComponent[],
}

export interface LocalComponent {
  "name": string,
  "grid": {
    "w": number,
    "h": number,
    "x": number,
    "y": number,
  }
}
