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

  return (
    <div>
      <h1 className="mt-48 flex justify-center text-5xl font-bold">
        Random Tab Component
      </h1>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
};

export default TabTest;
