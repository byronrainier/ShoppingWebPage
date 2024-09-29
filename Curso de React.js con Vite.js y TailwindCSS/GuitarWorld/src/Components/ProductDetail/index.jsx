import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppinCartContext); // Aqui le indico cual es el contexto que me va a leer, previamente ya importado.

  console.log("Product to show: ", context.productToShow);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl p-2">Detail</h2>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
