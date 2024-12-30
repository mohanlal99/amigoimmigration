export type ServicesType = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  href: string;
};

export interface Service {
  title: string;
  description: string;
  image: string;
  href: string;
}
export interface ServicesProps {
  services: Service[];
}
