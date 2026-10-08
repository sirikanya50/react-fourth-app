export default function ProductLink({ url, title }) {
  const a_link_style = {
    textDecoration: "none",
    color: "white",
    padding: "10px 15px",
    backgroundColor: "rgb(77, 21, 73)",
    borderRadius: "5px",
  };
  return (
    <>
      <a href={url} style={a_link_style}>
        {title}
      </a>
    </>
  );
}
