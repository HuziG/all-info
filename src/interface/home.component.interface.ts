export interface HomeComponentParams {
  yiweiUrl?: string;
  titleText?: string,
  titleBgColor?: string,
  materialid?: number
  picUrl?: string
}

export interface HomeComponent {
  label: string;
  name: string;
  key?: string;
  childPath?: string;
  description?: string;
  grid: {
    w: number;
    h: number;
    x: number;
    y: number;
  };
  params?: HomeComponentParams;
  style?: {
    color: string;
  };
}

export interface HomeDrawerComponent {
  label: string;
  key?: string;
  icon?: string;
  children: HomeComponent[];
}

export interface LocalComponent {
  name: string;
  grid: {
    w: number;
    h: number;
    x: number;
    y: number;
  };
}
