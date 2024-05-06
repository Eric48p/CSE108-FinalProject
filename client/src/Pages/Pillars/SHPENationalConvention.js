import NavBar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import "../../Styles/SHPE-convention.css"

function SHPENationalConvention() {
  return (
    <div>
      <NavBar />
      <div className="SHPEconvention-Body">
        <h1 style={{ textAlign: "center" }}>SHPE NATIONALS</h1>
      </div>
      <div className="SHPEconvention-Test">
        <div className="SHPEconvention-container">
          <div className="SHPEconvention-paragraph">
            <p>One of the biggest event this chapter can give access to is the chance to participate in the SHPE Nationals Conference. Participants such as undergraduate, graduates, and professionals present their skill set they have been preparing year round to apply to the job of their preference.</p>
            <p style={{ marginBottom: "5rem" }}>
            Potential Candidates fill out an application and are chosen by the board and interviewed to determine their grant status. Traditionally, candidates are physically taken to the conference sometimes out-of-state depending on the hosting state. This past 2020 National Conference  occurred virtually.
            </p>

            <div id="slideshow">
              <div className="slide-wrapper">
                {/* <!-- Define each of the slides and write the content --> */}

                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-Nationals/SHPEnationals1.jpg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-Nationals/SHPEnationals2.jpg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-Nationals/SHPEnationals3.jpg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-Nationals/SHPEnationals4.jpg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-Nationals/SHPEnationals1.jpg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-Nationals/SHPEnationals2.jpg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-Nationals/SHPEnationals3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SHPENationalConvention
