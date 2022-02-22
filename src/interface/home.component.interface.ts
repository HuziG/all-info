export interface HomeComponentParams {
  width: number;
  height: number;
  x: number;
  y: number;
  yiweiUrl?: string;
}

export interface HomeDrawerComponent {
  label: string;
  description?: string;
  name: string;
  style?: {
    color: string;
  };
  params: HomeComponentParams;
}
