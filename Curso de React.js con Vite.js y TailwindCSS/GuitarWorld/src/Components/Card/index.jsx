// De esta forma se importa un contexto
import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const context = useContext(ShoppinCartContext); // Aqui le indico cual es el contexto que me va a leer, previamente ya importado.

  const ShowProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail); // Aqui le indico cual es el contexto que me va a leer, previamente ya importado.
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCarProducts([...context.carProducts, productData]);
    context.openCheckOutSideMenu();
    context.closeProductDetail();
    // console.log("Cart: ", context.carProducts);
  };

  const renderIcon = (id) => {
    const isInCart =
      context.carProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2">
          <CheckIcon className="h-6 w-6 text-green-400"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 "
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => ShowProduct(data.data)}
    >
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bg-white/60 bottom-0 left-0 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-bold">US${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
