import { productData } from "@/data/ProductData"
import ProductDetail from "../components/ProductDetails"
import DetailHeader from "../components/DetailHeader"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
},) {
    const { slug } = await params
    const data = await productData(slug);

    return(
         <div>
        <DetailHeader />
       <ProductDetail details = {data}/>
    </div>
    )
}