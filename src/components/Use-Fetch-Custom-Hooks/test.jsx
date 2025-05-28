import useFetch from ".";

const UseFetchHookTest = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? <h3>Loading ! Please Wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p>{item.title}</p>)
        : null}
    </div>
  );
};

export default UseFetchHookTest;
