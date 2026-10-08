//rfc,rfce,rafce
import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBarMain from "../components/NavBarMain"
import hero from "../assets/hero.png"
export default function Home() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{textAlign:"center",color:"purple"}}>Home Page</h2>
      <p style={{textAlign:"center"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex
        vel neque, harum veniam doloribus quas consectetur nulla blanditiis
        consequatur.
      </p>
      {/* การแสดงรูปจาก public folder */}
      <img src="super.png" alt="super" style={{display:"block",margin:"0 auto"}}/>
      {/* การแสดงรูปจาก assets folder */}
      <img src={hero} alt="hero" style={{display:"block",margin:"0 auto"}}/>
      <Footer />
    </>
  )
}
