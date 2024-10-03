import { useContext } from "react";
import { Link } from "react-router-dom";
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

  // Objeto que provee todos los datos de la orden de compra
  const handleCheckOut = () => {
    const orderToAdd = {
      date: '03.10.2024',
      products: context.carProducts,
      totalProducts: context.length,
      totalPrice: totalPrice(context.carProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCarProducts([])
  }

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
      <div className="px-6 overflow-y-scroll flex-1">
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
      <div className="p-6 mb-3">
        <p className="flex justify-between items-center mb-3">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.carProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
        <button className="w-full py-3 text-white bg-black rounded-md" onClick={() => handleCheckOut()}>CheckOut</button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
