import ProductHeader from "../components/ProductHeader";
import Footer from "../components/Footer";
export default function Smartphone() {
  return (
    <>
      <a href="/product" style={{ textDecoration: "none", color: "purple" }}>
        <ProductHeader />
      </a>
      <h2 style={{textAlign:"center",color:"purple"}}>Smartphone Page</h2>
      <p style={{textAlign:"center"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        recusandae corrupti dolorum dolorem sapiente! Aperiam corporis eaque
        pariatur non sint.
      </p>
      <Footer />
    </>
  )
}
