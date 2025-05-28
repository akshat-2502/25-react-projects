import { useRef } from "react";
import useFetch from "../Use-Fetch-Custom-Hooks";

const ScrollToTopAndBottom = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Scroll To Bottom and Top</h1>
      <h3>This is the top section</h3>
      <button
        onClick={handleScrollToBottom}
        className="bg-blue-500 text-white cursor-pointer px-6 rounded-lg m-4 py-2"
      >
        Scroll To Bottom
      </button>
      <ul className="text-center">
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button
        onClick={handleScrollToTop}
        className="bg-blue-500 cursor-pointer text-white px-6 rounded-lg m-4 py-2"
      >
        Scroll To Top
      </button>
      <div ref={bottomRef}>This is Bottom</div>
    </div>
  );
};
export default ScrollToTopAndBottom;
