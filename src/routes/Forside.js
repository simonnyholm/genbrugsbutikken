const Forside = () => {
 const [products, setProducts] = useState(null)
 

  return (
    <div className="home">
      {isPending && <div>Blogindlæg indlæses...</div>}
      {blogs && <BlogList blogs={blogs} title="Alle blogindlæg" />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Forside;
