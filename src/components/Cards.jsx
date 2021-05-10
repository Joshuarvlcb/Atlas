const Cards = ({ activeF, data }) => {
  return (
    <>
      {data.map((curr, i) => {
        return (
          <div
            className={curr.active ? "active" : ""}
            onClick={activeF}
            style={{ padding: "0px", cursor: "pointer" }}
          >
            <img
              src={curr.src}
              height="120px"
              alt={curr.name}
              style={{ borderRadius: "15px", marginBottom: "5px" }}
            />

            <div style={{ fontWeight: "500", textAlign: "center" }}>
              {curr.name}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Cards;
