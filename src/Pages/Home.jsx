import About from "../component/About";
import Services from "../component/Services";
import Slider from "../component/Slider";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Slider></Slider>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;