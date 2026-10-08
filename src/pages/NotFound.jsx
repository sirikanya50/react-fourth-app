import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBarMain from "../components/NavBarMain"
export default function NotFound() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{textAlign:"center",color:"red"}}>
        404 Not Found </h2>
      <Footer />  
    </>
  )
}
