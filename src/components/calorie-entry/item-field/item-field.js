export const ItemField = (/* addItem */) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.key === "enter") {
      if (item.strip() === "") {
        // present error message
      } else {
        // go to next
        // addItem(item)
      }
    } else {
      setItem(item);
      //updateItem(item);
    }
  };
  return (
    <div>
      <input
        type={"text"}
        value={item}
        onKeyDown={(e) => handleChange(e)}
      ></input>
    </div>
  );
};
