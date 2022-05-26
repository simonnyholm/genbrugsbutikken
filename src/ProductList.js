/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";


const ProductList = ({ products, title }) => {
  const styles = {
    listTextWrap: css`
      display: flex;
    `,
    preview: css`
      & a {
        text-decoration: none;
      }
    `,
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {products.map((product) => (
        <div css={styles.preview} className="blog-preview" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h2 css={styles.allProductsHeader}>{product.type}</h2>
            <div css={styles.imgFrame} className="imgFrame">
              <div css={styles.itemDiv} className="itemDiv"></div>
            </div>
            <div css={styles.listTextWrap}></div>
            <div>
              <p css={styles.size}>Størrelse: {product.size}</p>
              <p css={styles.color}>Farve: {product.color}</p>
            </div>

            <p css={styles.price}>Pris: {product.price} DKK</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
