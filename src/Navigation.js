/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";
import logo from "../src/img/logo.png";

const Navigation = () => {
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
    logoBox: css`
      display: flex;
    `,
    logoImg: css`
      width: 100%;
      height: 100%;
    `,
    logoDiv: css`
      width: 80px;
    `,
  };

  return (
    <nav css={styles.navbar}>
      <div css={styles.logoBox} className="logoBox">
        <div css={styles.logoDiv} className="logoDiv">
          <img css={styles.logoImg} src={logo} alt="" />
        </div>
        <h1 css={styles.heading}>Genbrugsbutikken</h1>
      </div>

      <div css={styles.links} className="links">
        <Link to="/">Forside</Link>
        <Link to="/new">Sælg</Link>
      </div>
    </nav>
  );
};

export default Navigation;
