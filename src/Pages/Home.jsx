import About from "../component/About";
import Slider from "../component/Slider";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Slider></Slider>
            <About></About>
        </div>
    );
};

export default Home;