/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: css`
      padding: 20px;
      display: flex;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;
      border-bottom: 1px solid #f2f2f2;
      & a {
        margin-left: 16px;
        text-decoration: none;
        padding: 6px;
      }
      & a:hover {
        color: #f1356d;
      }
    `,
    heading: css`
      color: #da1930;
    `,
    links: css`
      margin-left: auto;
    `,
    atags: css``,
  };

  return (
    <nav css={styles.navbar}>
      <h1 css={styles.heading}>Genbrugsbutikken</h1>
      <div css={styles.links} className="links">
        <Link to="/">Forside</Link>
        <Link to="/Create">Sælg</Link>
      </div>
    </nav>
  );
};

export default Navbar;