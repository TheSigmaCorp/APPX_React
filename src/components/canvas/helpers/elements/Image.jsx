const CustomImage = (props) => {
  return (
    <div style={props.style}>
      <div
        style={{
          backgroundImage: "url('https://via.placeholder.com/150')",
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default CustomImage;
