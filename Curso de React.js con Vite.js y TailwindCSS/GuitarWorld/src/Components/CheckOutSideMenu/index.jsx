import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../Utils";
import "./styles.css";

const CheckOutSideMenu = () => {
  const context = useContext(ShoppinCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.carProducts.filter(
      (product) => product.id != id
    );
    context.setCarProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        context.isCheckOutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white `}
    >
      <div className="flex flex-col p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <svg
            onClick={() => context.closeCheckOutSideMenu()}
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
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.carProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="p-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.carProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
