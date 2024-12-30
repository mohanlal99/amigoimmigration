import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

//navbar menu Use in Header
export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};

//Services type Use in Sercies in components

//submit application user data type
export interface ApplicationData {
  name: string;
  email: string;
  mobile: string;
  dob: string;
  degree: string;
  department: string;
  cv: string;
}
