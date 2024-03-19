export type ShoeType = {
  id: number;
  src: string;
  className: string;
  title: string;
  description: string;
  price: number;
};

export type SideBarState = {
  sideBarReducer: {
    isShown: boolean;
  };
};

export type PreviewState = {
  previewReducer: {
    shoe: ShoeType;
  };
};

export type CartState = {
  cartReducer : {
    shoeList : ShoeType[]
  }
}

export type SelectType = {
  options: number[];
  title: string;
  className?:string
};

export type CardListType = {
  shoeList: ShoeType[];
};

export type ProductProps = {
  shoe : ShoeType
}