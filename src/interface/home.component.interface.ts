export interface HomeComponent {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface HomeDrawerComponent {
  label: string;
  name: string;
  style?: {
    color: string;
  };
  params: HomeComponent;
}
