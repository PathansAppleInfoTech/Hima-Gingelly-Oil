import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import BackToTop from "../BackToTop/BackToTop.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
