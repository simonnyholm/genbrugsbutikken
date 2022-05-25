/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const ProductList = ({ products, title }) => {
  //const blogs = props.blogs;
  //const title = props.title;

  const styles = {
    preview: css`
      & a {
        text-decoration: none;
      }
    `,
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {products.map((blog) => (
        <div css={styles.preview} className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Skrevet af: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
