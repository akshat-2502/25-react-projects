import Tabs from "./tabs";
import "./tabs.css";

const Tab3Component = () => {
  return <h1>Some random data from tab 3 passed as a component</h1>;
};

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <Tab3Component />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
