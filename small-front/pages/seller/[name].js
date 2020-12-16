import { useState } from 'react'

export default function Seller({sellers, params}) {
    const [seller, setSeller] = useState(
        sellers.find((s) => s.name === params)
    );
    return (
        <div>
        <h2>Seller</h2>
            <h2>{seller.name}</h2>
            <h2>{seller.description}</h2>
        </div>
    )
}

export async function getStaticPaths(){
    const res = await fetch('http://localhost:8000/api/seller/');
    const sellers = await res.json();

    const paths = sellers.map((seller) => `/seller/${seller.name}`)

    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const res = await fetch('http://localhost:8000/api/seller/');
    const sellers = await res.json();
    console.log(sellers)

    return {
        props: {
            sellers,
            params
        }
    }
}