import Item from "../Item/Item"

const ItemList = ({items}) => {
    console.log("ItemList: " + items)
  return (
    items.map(product => {
        <Item item = {product} />
    })
  )
}

export default ItemList