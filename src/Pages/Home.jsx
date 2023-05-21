
import Banner from "../components/Banner";
import CategoryTabs from "../components/CategoryTabs";
import GallerySection from "../components/GallerySection";
import SubscribeSection from "../components/SubscriveSection";


const Home = () => {
    
  return (
    <div>
          <Banner></Banner>
          <GallerySection></GallerySection>
          <CategoryTabs></CategoryTabs>
          <SubscribeSection></SubscribeSection>
    </div>
  );
};

export default Home;
