import React from 'react';
import './Home.css';
const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url('https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.og.jpg?202310101606')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Set a minimum height for the viewport (viewport height)
  };

  return (
    <>
        <div style={backgroundStyle}>
    <section className="home" id="home">
  <h3 data-speed="-2" className="home-parallax" style={{color:'white'}}> Believes in technology  </h3>
  
</section>


    
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> us
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.9498123557164!2d10.16464508396105!3d36.84367800064409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd359f19cff1a1%3A0x71a7d4d04a5b1ef2!2sGOMYCODE%20Menzah%205!5e0!3m2!1sen!2sin!4v1685559026020!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <form action="">
            <h3>Formulaire</h3>
            <input
              placeholder="Your name"
              type="text"
              id="nom"
              name="nom"
              className="box"
            />
            <span id="nomErreur"></span>
            <br />
            <br />
            <input
              placeholder="Your email"
              type="email"
              id="email"
              name="email"
              className="box"
            />
            <span id="emailErreur"></span>
            <br />
            <br />
            <input
              placeholder="Your phone"
              type="text"
              id="tel"
              name="tel"
              className="box"
            />
            <span id="telErreur"></span>
            <br />
            <br />
            <textarea
              placeholder="Your message"
              className="box"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              id="submitBtn"
              className="btn"
            />
          </form>
        </div>
      </section>

      <section className="footer" id="footer">
      <div class="box-container">

<div class="box">
    <h3>our branches</h3>
    <a href="#"> <i class="fas fa-map-marker-alt"></i> india </a>
    <a href="#"> <i class="fas fa-map-marker-alt"></i> japan </a>
    <a href="#"> <i class="fas fa-map-marker-alt"></i> france </a>
    <a href="#"> <i class="fas fa-map-marker-alt"></i> russia </a>
    <a href="#"> <i class="fas fa-map-marker-alt"></i> USA </a>
</div>

<div class="box">
    <h3>quick links</h3>
    <a href="#"> <i class="fas fa-arrow-right"></i> home </a>
    <a href="#"> <i class="fas fa-arrow-right"></i> vehicles </a>
    <a href="#"> <i class="fas fa-arrow-right"></i> services </a>
    <a href="#"> <i class="fas fa-arrow-right"></i> contact </a>
</div>

<div class="box">
    <h3>contact info</h3>
    <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
    <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
    <a href="#"> <i class="fas fa-envelope"></i> maxauto@gmail.com </a>
    <a href="#"> <i class="fas fa-map-marker-alt"></i> Tunis, Tunisia - 400104 </a>
</div>

<div class="box">
    <h3>contact info</h3>
    <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
    <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
    <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
    <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
    <a href="#"> <i class="fab fa-pinterest"></i> pinterest </a>
</div>

</div>
      </section>
      </div>

    </>
  );
};

export default Home;
