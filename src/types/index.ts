export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  category: string;
  price?: number;
}

export interface ITraining {
  _id: string;
  title: string;
  description: string;
  date: string;
  capacity: number;
  location: string;
}

export interface IEvent {
  _id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface IInspection {
  _id: string;
  name: string;
  description: string;
  price?: number;
  estimatedTime?: string;
}
