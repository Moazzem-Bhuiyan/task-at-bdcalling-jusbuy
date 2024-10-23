import Categoryes from "../HomeChild/Categoryes";
import ExploreOurProduct from "../HomeChild/ExploreOurProduct";
import Hero from "../HomeChild/Hero";
import NewArival from "../HomeChild/NewArival";


const Homepage = () => {
    return (
        <div className="">
            <Hero></Hero>
            <Categoryes></Categoryes>
            <NewArival></NewArival>
            <ExploreOurProduct></ExploreOurProduct>
            
        </div>
    );
};

export default Homepage;