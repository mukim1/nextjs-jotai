import { atom } from "jotai";

export const productsAtom = atom<ProductType[]>([]);
export const cartAtom = atom<ProductType[]>([]);

export const addToCartAtom = atom(
  () => "",
  (get, set, item: ProductType) => set(cartAtom, [...get(cartAtom), item])
);

export const updateCartAtom = atom(
  () => "",
  (get, set, item: ProductType) =>
    set(
      cartAtom,
      item.quantity < 1
        ? get(cartAtom).filter(
            (cartItem: ProductType) => cartItem.id !== item.id
          )
        : get(cartAtom).map((cartItem: ProductType) =>
            cartItem.id === item.id ? item : cartItem
          )
    )
);

export const removeFromCartAtom = atom(
  () => "",
  (get, set, item: ProductType) =>
    set(
      cartAtom,
      get(cartAtom).filter((cartItem: ProductType) => cartItem.id !== item.id)
    )
);

export interface ProductType {
  quantity: number;
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
  amount?: number;
}
export interface Rating {
  rate: number;
  count: number;
}
