import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppinCartContext); // Aqui le indico cual es el contexto que me va a leer, previamente ya importado.

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white `}
    >
      <div className="flex flex-col p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <svg
            onClick={() => context.closeProductDetail()}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <figure className="px-6">
          <img
            className="w-full h-full rounded-lg"
            src={context.productToShow.images}
            alt={context.productToShow.title}
          />
        </figure>
        <p className="flex flex-col p-6 mb-2">
          <span className="font-medium text-2xl">
            ${context.productToShow.price}
          </span>
          <span className="font-medium mb-1 text-md">
            {context.productToShow.title}
          </span>
          <span className="font-light text-sm">
            {context.productToShow.description}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
