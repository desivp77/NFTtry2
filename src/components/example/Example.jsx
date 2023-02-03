import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Card from "../card/Card.jsx";
import Header from "../header/Header.jsx";
import How from "../how/How.jsx";
import Trending from "../Trending/Trending.jsx";
import Footer from "../footer/Footer";
// import User from "../user/User.jsx";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Header/> 
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/card" color="secondary">
            Hi
          </Link>
        </Paper>
      </Container>
      <Card />
<Trending />
{/* <How /> */}
<Footer />
    </div>
  );
}
