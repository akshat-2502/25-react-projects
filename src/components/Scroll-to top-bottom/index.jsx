import useFetch from "../Use-Fetch-Custom-Hooks";

const ScrollToTopAndBottom = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Scroll To Bottom and Top</h1>
      <h3>This is the top section</h3>
      <button>Scroll To Bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
    </div>
  );
};
export default ScrollToTopAndBottom;
