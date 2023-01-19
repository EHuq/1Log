import { ItemField } from "../item-field/item-field";

const ItemList = () => {
  const [itemList, setItemList] = useState([]);

  // const addItem = () => {};
  return (
    <div>
      {itemList.forEach((item) => {
        <ItemField /* addItem = {addItem} */ />;
      })}
    </div>
  );
};
