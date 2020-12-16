import "tailwindcss/tailwind.css";
import '../styles/global.css'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <Footer/>
        </div>
        )
}

export default MyApp