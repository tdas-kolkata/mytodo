import { useEffect, useState } from "react";
import MarketItem from "./MarketItem";

function MarketList() {
  const [products, setProducts] = useState(null);

  //loading the products data initially
  useEffect(() => {
    loadProducts();
  }, []);

  //console log the products when the products state changes
  useEffect(() => {
    console.log(products);
  }, [products]);

  const loadProducts = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setProducts(data);
  };
  // d-flex flex-row flex-wrap justify-content-around align-items-stretch
  return (
    <div className="d-grid">
      <div className="row justify-content-around">
        {products === null
          ? null
          : products.map((product) => (
              <MarketItem key={product.id} product={product} />
            ))}
        {/* {products === null ? null : <MarketItem product={products[0]} />} */}
      </div>
    </div>
  );
}

export default MarketList;
