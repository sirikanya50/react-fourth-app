export default function NavBarMain() {
  const a_style = {
    color: "white",
    textDecoration: "none"
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(77, 21, 73)",
          padding: "15px",
          marginBottom: "50px",
          gap: "30px",
        }}
      >
        <a href="/" style={a_style}>HOME</a>
        <a href="/about" style={a_style}>ABOUT</a>
        <a href="/contact" style={a_style}>CONTACT</a>
        <a href="/product" style={a_style}>PRODUCT</a>
      </div>
    </>
  )
}
