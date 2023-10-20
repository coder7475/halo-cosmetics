
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';
import Brands from '../components/Brands';

const HomePage = () => {
  return (
    <div className="dark:bg-neutral-600">
      <div className="dark:bg-neutral-200">
        <Banner />
      </div>
      <AboutUs />
      <Brands />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default HomePage;
