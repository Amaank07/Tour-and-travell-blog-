import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import HomeImg from "../assets/12.jpg";
function Home() {
    return(
        <>
            <Navbar/>
            <Hero
                cName="Hero"
                heroImage={HomeImg}
                title="Your Journey Your Story"
                text="Choose Your FAvourite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
        </>
        );
}

export default Home;