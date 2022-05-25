import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect } from "react";
import {
  addToCartAtom,
  cartAtom,
  productsAtom,
  ProductType,
  updateCartAtom,
} from "../stores/product_store";
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";

const Products = () => {
  const [cart] = useAtom(cartAtom);
  const [products, setProducts] = useAtom(productsAtom);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    fetch("/product.json")
      .then((res) => res.json())
      .then((res: ProductType[]) => setProducts(res));
  }, []);

  console.log([{ name: "marjan", roll: 30 }]);

  console.log(products);

  return (
    <div className="max-w-screen-xl px-2 lg:px-16 m-auto mt-10 grid grid-cols-4 gap-3">
      <p className=" col-span-4 text-2xl">All Product</p>
      <div className="col-span-3 grid grid-cols-12 gap-3">
        {products?.map((item) => {
          return <DisplayProductItem key={item.id} item={item} />;
        })}
      </div>
      <div className="col-span-1">
        {cart?.map((item) => (
          <div className=" bg-gray-600 p-2 mb-3" key={item.id}>
            <Image src={item.image} width="100px" height="100px" />
            <p>{item.title.slice(0, 25) + "..."}</p>
            <p>
              Price: {item.price}
              {/* Quantity: {item.quantity} */}
            </p>
            <p>
              <UpdateCartBtn isInCart={item} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DisplayProductItem = ({ item }: { item: ProductType }) => {
  const [, addToCart] = useAtom(addToCartAtom);
  const [cart] = useAtom(cartAtom);

  const isInCart = cart.find((itm) => itm.id === item.id);

  return (
    <div className=" col-span-2 lg:col-span-4 bg-slate-600">
      <div className="relative h-40">
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={120}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-5">
        <p>{item.title.slice(0, 20) + "..."}</p>
        <p>Price: {item.price}</p>
        {isInCart ? (
          <div className=" text-right">
            <UpdateCartBtn isInCart={isInCart} />
          </div>
        ) : (
          <Button
            width={"full"}
            onClick={() => {
              addToCart({ ...item, quantity: 1 });
            }}
          >
            Add to card
          </Button>
        )}
      </div>
    </div>
  );
};

const UpdateCartBtn = ({ isInCart }: { isInCart: any }) => {
  const [, updateToCart] = useAtom(updateCartAtom);
  return (
    <ButtonGroup size="md" isAttached variant="outline">
      <IconButton
        onClick={() => {
          updateToCart({
            ...isInCart,
            quantity: isInCart.quantity - 1,
          });
        }}
        aria-label="Add to friends"
        icon={<IoMdRemove />}
      />
      <Button>{isInCart.quantity}</Button>
      <IconButton
        onClick={() => {
          updateToCart({
            ...isInCart,
            quantity: isInCart.quantity + 1,
          });
        }}
        aria-label="Add to friends"
        icon={<GrAdd />}
      />
    </ButtonGroup>
  );
};

export default Products;
