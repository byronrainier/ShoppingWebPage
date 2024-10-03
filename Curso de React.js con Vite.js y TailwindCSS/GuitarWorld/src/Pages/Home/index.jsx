import { useContext, useEffect, useState } from "react";
import { ShoppinCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppinCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input placeholder="Buscar un Producto" type="text" className="rounded-lg border border-black w-80 mb-4 p-4 focus:outline-none"
      onChange={(event) => context.setSearchBytitle(event.target.value)} />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
