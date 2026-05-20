import { useParams } from "react-router-dom";
import AlsoLike from '../../components/AlsoLike/AlsoLike'
import Navbar from '../../components/Navbar/Navbar'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import Footer from '../../components/Footer/Footer'

const Product = () => {
    const { id } = useParams();
  return (
    <>
          <Navbar />
          <ProductDetails id={id} />
          <AlsoLike />
          <Footer />
    </>
  )
}

export default Product
