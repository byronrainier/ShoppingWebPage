import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"

function MyOrder() {
  const context = useContext(ShoppinCartContext);
  const currenPath = window.location.pathname
  let index = currenPath.substring(currenPath.lastIndexOf('/') +1)

  if(index === 'last') index = context.order?.length - 1

  return (
  <Layout>
`      <div className="flex items-center justify-center w-80 relative">
        <Link to='/My-orders' className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>`
    <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.images}
            price={product.price}
          />
        ))}
      </div>
  </Layout>
  )
}

export default MyOrder
