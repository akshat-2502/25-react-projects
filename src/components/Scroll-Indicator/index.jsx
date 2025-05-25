import { useEffect, useState } from "react";
import "./scroll.css";

const ScrollIndicator = ({ url }) => {
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [errMessage, setErrMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  //   const fetchData = async (geturl) => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(geturl);
  //       const data = await response.json();
  //       if (data && data.products && data.products.length > 0) {
  //         setData(data.products);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       setErrMessage(error);
  //       console.log(errMessage);
  //       setLoading(false);
  //     }
  //   };

  const handleScrollPercentage = () => {
    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.documentElement.clientHeight);

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  //   useEffect(() => {
  //     fetchData(url);
  //   }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  return (
    <div>
      <div className="top-container">
        <h1>Scroll indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
