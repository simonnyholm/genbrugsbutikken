import { useEffect, useState } from "react";
import ProductList from "../ProductList";

const Forside = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:7000/products")
        .then((response) => {
          if (!response.ok) {
            throw Error("Varen kunne ikke hentes fra databasen");
          }
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setProducts(data);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 800);
  }, []);

  return (
    <div className="forside">
      {isLoading && <div>Varer indlæses...</div>}
      {products &&
        products.map((card) => <ProductList product={card} key={card.id} />)}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Forside;
