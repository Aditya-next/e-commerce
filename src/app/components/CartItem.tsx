
type ratingType = {
    rate: number,
    count: number,
}

type cartItemType = {
    addedItem: productsTypes[],
    removeHandler: any
}

interface productsTypes {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    rating: ratingType,
    image: string
}

export default function CartItem({ addedItem, removeHandler }: cartItemType) {
    console.log("added cart", addedItem)
    return (
        <div>
            {addedItem.map((item, index) =>
                <div key={index}
                    className="flex gap-3 mt-2">
                    {item?.title}
                    <button className="px-2 py-1 rounded font-semibold text-sm text-gray-700 bg-gray-300 cursor-pointer" onClick={() => removeHandler(item.id)}>Delelte item</button>
                </div>
            )}
        </div>
    )
}