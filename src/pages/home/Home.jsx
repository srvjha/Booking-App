import Footer from "../../components/Footer/Footer"
import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProp/FeaturedProperties"
import { Header } from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import { Navbar } from "../../components/navbar/Navbar"
import PropertyList from "../../components/property/PropertyList"
import "./home.css"



const Home = props => {
  return (
    <div>
        <Navbar />
        <Header/>
       <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse By Property Type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Rave reviews from guests</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
       
        
       </div>

        </div>
  )
}



export default Home