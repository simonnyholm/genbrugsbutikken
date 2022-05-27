/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch.js";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const styles = {
    BlogDetails: css`
      padding: 25px;
    `,
  };

  const navigate = useNavigate();
  function handleClick() {
    if (window.confirm("Er du sikker på, at du vil slette?")) {
      fetch("http://localhost:7000/products/" + product.id, {
        method: "DELETE",
      }).then(function () {
        console.log("deleted");
        navigate("/");
      });
    }
  }

  const { id } = useParams();

  const {
    data: product,
    error,
    isPending,
  } = useFetch("http://localhost:7000/products/" + id);

  console.log(product);

  return (
    <div css={styles.BlogDetails} className="BlogDetails">
      <h2>Mere om varen:</h2>
      {isPending && <div>..Indholdet indlæses</div>}
      {error && <div>{error}</div>}
      {product && (
        <article>
          <h2>{product.type}</h2>
          <div className="imgFrame">
            <div className="imgItem"></div>
          </div>

          <p>Om varen: {product.desc}</p>

          <p>Farve: {product.color}</p>
          <p>Pris: {product.price} DKK</p>
          <p>Sælger: {product.owner} </p>

          <button onClick={handleClick}>Slet varen</button>
        </article>
      )}
    </div>
  );
};

export default ProductDetails;
