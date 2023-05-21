import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTabs = () => {
  return (
      <div className="mt-10">
          <h2 className="text-3xl text-center font-bold mb-8">
          Unleash Your Inner Hero: Action Figure Toy Collection
      </h2>
      <Tabs>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>Star Wars</Tab>
          <Tab>DC</Tab>
        </TabList>

        <TabPanel>{/* Render Marvel action hero toys */}</TabPanel>
        <TabPanel>{/* Render Avengers action hero toys */}</TabPanel>
        <TabPanel>{/* Render Star Wars action hero toys */}</TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
