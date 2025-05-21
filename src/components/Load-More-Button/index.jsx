import { useEffect, useState } from "react";

import "./styles.css";

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    if (products && products.length === 100) setDisableButton(true);
    console.log(disableButton);
  }, [count]);

  if (loading) {
    return <div>Data is Loading ! Please Wait </div>;
  }

  return (
    <div className="load-more-container">
      <h1 className="text-5xl font-bold">Load More Button</h1>
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More
        </button>
        {disableButton ? <p>You have readed max limit</p> : null}
      </div>
    </div>
  );
}
