import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Layout from "../../Components/Layout"
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppinCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative">
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
      <OrdersCard />
    </Layout>
  )
}

export default MyOrders
