export async function productData(id: number | string) {
    const productUrl = `https://fakestoreapi.com/products/${id}`;
    try {
        const data = await fetch(productUrl);
        const result = await data.json()
        return result;
    }
    catch (error) {
        console.log(error);
    }
}