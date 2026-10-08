import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBarMain from "../components/NavBarMain"
export default function About() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{textAlign:"center",color:"purple"}}>About Page</h2>
      <p style={{textAlign:"center"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam
        in obcaecati quo? Corporis saepe eum impedit rem cupiditate, maiores
        expedita alias animi eos obcaecati deleniti dolores ipsa dignissimos
        officiis.
      </p>
      <Footer />
    </>
  )
}
