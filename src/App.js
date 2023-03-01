import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import HomeGallery from "./Components/HomeGallery/HomeGallery";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Navbar from "./Components/Navbar/Navbar";
import RecentBlog from "./Components/RecentBlog/RecentBlog";
import Testimonials from "./Components/Testimonials/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#E6E6E6' }}>
        <Navbar />
        <Banner />
        <HomeGallery />
        <HowItWorks />
        <WhyChooseUs />
        <RecentBlog />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
