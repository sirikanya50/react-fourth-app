import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBarMain from "../components/NavBarMain";
import ProductLink from "../components/ProductLink";

export default function Product() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{ textAlign: "center", color: "purple" }}>Product Page</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <ProductLink url="/product/computer" title="COMPUTER" />
        <ProductLink url="/product/smartphone" title="SMARTPHONE" />
      </div>

      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iste,
        necessitatibus voluptates rem rerum, in, earum inventore voluptas
        eveniet exercitationem dolorum doloremque nostrum error repudiandae
        soluta eius fugiat sequi corporis?
      </p>
      <Footer />
    </>
  )
}
