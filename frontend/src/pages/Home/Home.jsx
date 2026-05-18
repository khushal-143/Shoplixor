
import Categories from '../../components/Categories/Categories'
import CopyRight from '../../components/CopyRight/CopyRight'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories/>
      <Footer />
      <CopyRight/>
    </>
  )
}

export default Home
