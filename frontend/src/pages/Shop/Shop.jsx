import { useParams } from "react-router-dom";
import AlsoLike from '../../components/AlsoLike/AlsoLike'
import Navbar from '../../components/Navbar/Navbar'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import ProductSummary from '../../components/ProductSummary/ProductSummary'
import Footer from '../../components/Footer/Footer'
const Shop = () => {
    const { id } = useParams();
    return (
        <>
            <Navbar />
            <ProductDetails id={id}/>
            <ProductSummary id={id} />
            <AlsoLike />
            <Footer />
        </>
    )
}

export default Shop
