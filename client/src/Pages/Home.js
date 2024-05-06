import Footer from "../Components/Footer"
import NavBar from "../Components/Navbar"
import "../Styles/Home.css"

function Home() {
  return (
    <>
      <NavBar />
      <div className="home-body">
        <h1 style={{ fontSize: "40px" }}>University of California, Merced</h1>
        <h1 style={{ fontSize: "40px" }}>
          Society of Hispanic Professional Engineers
        </h1>
        <h1 style={{ fontSize: "30px" }}>" Lift As You Climb "</h1>
        <div className="home-image">
          <div id="slideshow">
            <div className="slide-wrapper">
              {/* <!-- Define each of the slides and write the content --> */}

              <div className="slide">
                <img
                  className="slideImages cover"
                  src="/Images/Main-Page/Home-1.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="slideImages cover"
                  src="/Images/Main-Page/Home-2.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="slideImages cover"
                  src="/Images/Main-Page/Home-3.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="slideImages cover"
                  src="/Images/Main-Page/Home-4.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="slideImages cover"
                  src="/Images/Main-Page/Home-5.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="slideImages cover"
                  src="/Images/Main-Page/Home-6.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="slideImages cover"
                  src="/Images/Main-Page/Home-7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <h1>Mission Statement</h1>
        <p>
          Our mission statement as stated in the bylaws: Increase the number of
          Hispanic engineering students at the University of California Merced.
          Promote the advancement of Hispanic engineers and scientists in
          employment and education. Develop and participate in programs with
          industry and the university, which benefit students seeking technical
          degrees. Improve the retention of Hispanic students enrolled in
          engineering and science. Provide a forum for the exchange of
          information pertinent for Hispanic engineering/science students
          enrolled in UC Merced. Increase STEM Awareness around Hispanic
          students in Merced County.
        </p>
        <span className="home-body-line"></span>
        <h1>Vision</h1>
        <p>
          SHPE UC Merced is committed to impacting the world by creating leading
          engineers, mathematicians, and scientists that are capable of:
          adapting to changing environments, posses visionary mindsets, and
          value growth and impact within the Hispanic Community. We envision a
          world where Hispanics are highly valued and known as leaders in their
          respective fields.
        </p>
        <p>
          Our SHPE familia principle recognizes the power behind being a support
          system for all our members. Driven by the desire to bridge the gap of
          Hispanics in STEM, we strive to create a pipeline within the Hispanic
          community through inspiration and guidance of the next generation and
          by pushing students of all ages to pursue higher education. Our
          national connections and programs are what makes us a powerful force.
        </p>
        <span className="home-body-line"></span>
      </div>
      <Footer />
    </>
  )
}

export default Home
