
import Categories from '../../components/Categories/Categories'
import CopyRight from '../../components/CopyRight/CopyRight'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import FlashSale from '../../components/FlashSale/FlashSale'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <FlashSale/>
      <FeaturedProducts/>
      <Footer />
      <CopyRight/>
    </>
  )
}

export default Home
