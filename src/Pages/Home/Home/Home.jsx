import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
        </div>
    );
};

export default Home;