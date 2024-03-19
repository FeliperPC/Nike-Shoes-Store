import { PropsWithChildren } from "react";

export type ShoeType = {
  id: number;
  src: string;
  className: string;
  title: string;
  description: string;
  price: number;
};

export type ChildremProps = {
  children: PropsWithChildren;
};

export type RootState = {
  sideBarReducer: {
    isShown: boolean;
  };
};
