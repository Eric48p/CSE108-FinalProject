import NavBar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import "../../Styles/SHPE-tinas.css"

function SHPEtinas() {
  return (
    <div>
      <NavBar />
      <div className="SHPEtinas-Body">
        <h1 style={{ textAlign: "center" }}>SHPE-TINAS</h1>
      </div>
      <div className="SHPEtinas-Test">
        <div className="SHPEtinas-container">
          <div className="SHPEtinas-paragraph">
            <h1>SHPE-tinas @UC Merced</h1>
            <p>What does SHPE-tinas offer?</p>
            <p>
              Alongside UC Merced's evolving nature, our SHPE Chapter is all in
              for inclusion especially in STEM. In 2018 about 14.1% women of
              color earned a degree in STEM, which narrows to only 2.3% of
              Latina women in the United States( 3% today). The SHPE UC Merced
              Chapter believes in sparking and maintaining conversations about
              these disparities together with Men, Women, and those
              in-between.Our first Regional SHPE-tinas in 2019 was a success and
              was hosted again in early 2020. Our numbers quickly rose to the
              100s. 2020 SHPE-tinas was hosted virtually.
            </p>
            <p style={{marginBottom: "5rem"}}>
              In addition to creating Raffles, keynote speakers, fireside chats
              and Rotational workshops.
            </p>

            <div id="slideshow">
              <div className="slide-wrapper">
                {/* <!-- Define each of the slides and write the content --> */}

                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-tinas/shpetinas-slideshow1.jpg"
                    alt="SHPE-tinas 2020 Region 1"
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-tinas/shpetinas-slideshow2.jpg"
                    alt="SHPE-tinas hosted by SHPE at UC Merced for the second time in 2020!"
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-tinas/shpetinas-slideshow3.jpg"
                    alt="SHPE-tinas 2020"
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-tinas/shpetinas-slideshow4.jpg"
                    alt="The first time the UC Merced SHPE Chapter hosts SHPE-tinas in 2019"
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-tinas/shpetinas-slideshow1.jpg"
                    alt="SHPE-tinas 2020 Region 1"
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-tinas/shpetinas-slideshow2.jpg"
                    alt="SHPE-tinas hosted by SHPE at UC Merced for the second time in 2020!"
                  />
                </div>
                <div className="slide">
                  <img
                    className="slideImages cover"
                    src="/Images/Pillars/SHPE-tinas/shpetinas-slideshow3.jpg"
                    alt="SHPE-tinas 2020"
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

export default SHPEtinas
