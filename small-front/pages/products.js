import {useEffect} from 'react'
import {loadGetInitialProps} from "next/dist/next-server/lib/utils";

export default function Products({products}) {
    useEffect(() => {
            console.log(products)
        }
    )

    return (
        <div>
            <h2>Products</h2>
            {products.map(product => <div>
                <h3>{product.title}</h3>
            </div>)}
        </div>
    )
}





export async function getStaticProps() {
    const res = await fetch('http://localhost:8000/api/product/');
    const products = await res.json()

    return {
        props: {
            products,
        },
    };
}