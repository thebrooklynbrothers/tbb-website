export interface Case {
  id: string;
  title: string;
  client: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  year: number;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  category: string;
  image: string;
}
