import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between m-2 p-2 bg-gray-50"
        >
          <div className="w-10/12 text-left">
            <span>{item.card.info.name}</span>
            <span>{item.card.info.description}</span>
          </div>
          <div className="w-2/12">
            <img className="w-36" src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
