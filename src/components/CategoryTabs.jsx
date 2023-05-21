import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
import Aos from "aos";
import 'aos/dist/aos.css';

const CategoryTabs = () => {
    useEffect(() => {
        Aos.init();
    })
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-legend-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  return (
    <div className="mt-10 rounded-lg border-t-2 pt-5 border-b-2" data-aos='fade-left'>
      <h2 className="text-3xl text-center font-bold mb-8">
        Unleash Your Inner Hero: Action Figure Toy Collection
      </h2>
      <Tabs>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>Star Wars</Tab>
          <Tab>DC</Tab>
        </TabList>

        <TabPanel>
          <div className='grid sm:grid-cols-2 md:grid-cols-3'>
            {allToys
              .filter((toy) => toy.subcategory === "Marvel")
              .map((toy) => (
                <CategoryCard key={toy._id} toy={toy}></CategoryCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel><div className='grid sm:grid-cols-2 md:grid-cols-3'>
            {allToys
              .filter((toy) => toy.subcategory === "Star Wars")
              .map((toy) => (
                <CategoryCard key={toy._id} toy={toy}></CategoryCard>
              ))}
          </div></TabPanel>
        <TabPanel><div className='grid sm:grid-cols-2 md:grid-cols-3'>
            {allToys
              .filter((toy) => toy.subcategory === "DC")
              .map((toy) => (
                <CategoryCard key={toy._id} toy={toy}></CategoryCard>
              ))}
          </div></TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
