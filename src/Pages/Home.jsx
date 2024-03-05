import React from 'react'
import "../CSS/pages.css"
import banner from "../img/man.422a052d.png";

const Home = () => {
  return (
    <div>
      <container>
      <section className="banner-section">
          <div className="row">
            <div className="col-md-6">
              <h1 className="font-150 pt-5 ps-5 fw-lighter pb-0 margin-top-130px">
                LIVE FOR {" "}
                <span className="fw-bold text-white pb-0">FASHION</span>
              </h1>
              <h2 className="ps-5 text-white fw-semibold">SAVE UP TO 50%</h2>
              <div className="">
                <button className="ms-5 px-4 py-2 fs-fw-semibold navlink btn btn-outline-primary">
                  SHOP NOW
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <img src={banner} alt=""  />
            </div>
          </div>
        </section>
      </container>
    </div>
  )
}

export default Home