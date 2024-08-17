import { Fragment } from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function Layout(props) {
  const { children, onSubmit, onChange, genres, withNavbar, withFooter, withSearch } =
    props;
  return (
    <Fragment>
      {withNavbar && <Navbar onSubmit={onSubmit} onChange={onChange} withSearch={withSearch} />}
      {children}
      {withFooter && <Footer />}
    </Fragment>
  );
}
