
const About = () => {
  return (
      <div className="container">
      {/* Header */}
      <section className="about-hero">
        <h1>About ShopEase</h1>
        <p>
          Making online shopping easy, affordable, and reliable for everyone.
        </p>
      </section>
       {/* About Content */}
      <section className="about-hero1">
        <p>
          <strong>ShopEase</strong> was created with a simple mission — to make
          online shopping easy, affordable, and reliable for everyone.
          What started as a small idea has grown into a platform that connects
          customers with products they can trust. We focus on quality,
          transparency, and customer satisfaction in everything we do.
        </p>
      </section>
       {/* Mission & Vision */}
      <section >
        <div className="about-hero">
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality products at fair prices while providing a
            seamless and enjoyable shopping experience.
          </p>
        </div>
 
        <div className="about-hero">
          <h2>Our Vision</h2>
          <p>
            To become a trusted online marketplace known for simplicity, speed,
            and customer-first service.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About