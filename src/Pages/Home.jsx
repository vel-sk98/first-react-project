import banner from "../assets/banner.webp";
const Home = () => {
  return (
      <div className="container">
          {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <h2>Welcome to ShopEase</h2>
          <p>
            Your one-stop destination for quality products at unbeatable prices.
          </p>
        </div>

        <img
          src={banner}
          alt="Ecommerce banner"
          className="hero-image"
        />

        
      </section>
    </div>
  )
}

export default Home