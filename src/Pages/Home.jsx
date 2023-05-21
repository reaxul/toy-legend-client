
import Banner from "../components/Banner";
import CategoryTabs from "../components/CategoryTabs";
import GallerySection from "../components/GallerySection";
import SubscribeSection from "../components/SubscriveSection";
import useTitle from "../hooks/useTitle";


const Home = () => {
    useTitle("Home")
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
