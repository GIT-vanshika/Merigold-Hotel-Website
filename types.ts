
export interface NavItem {
  label: string;
  path: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Dining {
  name: string;
  type: string;
  description: string;
  features: string;
}

export interface Hall {
  name: string;
  capacity: string;
}
