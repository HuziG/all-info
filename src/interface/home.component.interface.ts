export interface HomeComponentParams {
  yiweiUrl?: string;
}

export interface HomeDrawerComponent {
  key?: string;
  label: string;
  description?: string;
  name: string;
  style?: {
    color: string;
  };
  params?: HomeComponentParams;
  grid: {
    x: number;
    y: number;
    w: number;
    h: number;
  }
}
