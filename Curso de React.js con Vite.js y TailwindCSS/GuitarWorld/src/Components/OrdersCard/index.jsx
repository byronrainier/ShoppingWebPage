import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border-black">
        <p>
            {/* <span>03.10.2024</span> */}
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  );
};

export default OrdersCard;
