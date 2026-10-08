import ProductHeader from "../components/ProductHeader";
import Footer from "../components/Footer";
export default function Computer() {
  return (
    <>
      <a href="/product" style={{ textDecoration: "none", color: "purple" }}>
        <ProductHeader />
      </a>
      <h2 style={{ textAlign: "center", color: "purple" }}>Computer Page</h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus
        quisquam voluptatem at quis fuga officia? Officiis consequatur a
        corporis consectetur modi deserunt, accusamus quo odit asperiores,
        placeat architecto iusto.
      </p>
      <Footer />
    </>
  );
}
