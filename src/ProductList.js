/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import beige from "../src/img/beige.jpg";
import sort from "../src/img/black.jpg";
import blå from "../src/img/blue.jpg";
import brun from "../src/img/brown.jpg";
import bordeaux from "../src/img/burgundy.jpg";
import mørkegrå from "../src/img/dark-grey.jpg";
import grøn from "../src/img/green.jpg";
import lysegrå from "../src/img/light-grey.jpg";
import limegrøn from "../src/img/lime-green.jpg";
import orange from "../src/img/orange.jpg";
import pink from "../src/img/pink.jpg";
import lilla from "../src/img/purple.jpg";
import rød from "../src/img/red.jpg";
import turkis from "../src/img/turquoise.jpg";
import hvid from "../src/img/white.jpg";
import gul from "../src/img/yellow.jpg";

const ProductList = ({ product, title }) => {
  const styles = {
    listTextWrap: css`
      display: flex;
    `,
    preview: css`
      & a {
        text-decoration: none;
      }
    `,
    itemDiv: css`
      width: 20px;
      height: 20px;
      background-image: ${product.color === "beige" && beige};
      ${product.color === "blå" && blå};
      ${product.color === "sort" && sort};
      ${product.color === "brun" && brun};
      ${product.color === "bordeaux" && bordeaux};
      ${product.color === "mørkegrå" && mørkegrå};
      ${product.color === "grøn" && grøn};
      ${product.color === "lysegrå" && lysegrå};
      ${product.color === "limegrøn" && limegrøn};
      ${product.color === "orange" && orange};
      ${product.color === "lilla" && lilla};
      ${product.color === "rød" && rød};
      ${product.color === "turkis" && turkis};
      ${product.color === "hvid" && hvid};
      ${product.color === "gul" && gul};
      ${product.color === "pink" && pink};
      background-repeat: no-repeat;
      background-attachment: fixed;
    `,
  };

  console.log(product.color);
  return (
    <div className="blog-list">
      <h2>{title}</h2>

      <div css={styles.preview} className="blog-preview" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <h2 css={styles.allProductsHeader}>{product.type}</h2>
          <div css={styles.imgFrame} className="imgFrame">
            <div
              css={styles.itemDiv}
              style={{ backroundImage: product.color }}
              className="itemDiv"
            ></div>
          </div>
          <div css={styles.listTextWrap}></div>
          <div>
            <p css={styles.size}>Størrelse: {product.size}</p>
            <p css={styles.color}>Farve: {product.color}</p>
          </div>

          <p css={styles.price}>Pris: {product.price} DKK</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
