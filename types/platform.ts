import { ElementType } from "react";

export interface Platform {
  name: string;
  icon: ElementType;
  url: string;
  color: string;
}

export interface Platform {
  name: string;
  icon: ElementType;
  url: string;
  color: string;
  ariaLabel?: string; // optional, in case not all use it
}