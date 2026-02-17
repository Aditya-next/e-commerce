import { productData } from "@/data/ProductData"
import Header from "../components/Header"
import ProductDetail from "../components/ProductDetails"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
},) {
    const { slug } = await params
    const data = await productData(slug);
    console.log("data for specific product",data);

    return(
         <div>
        <Header />
       <ProductDetail details = {data}/>
    </div>
    )
}