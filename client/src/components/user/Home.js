import React from 'react'
import { Card , Row , Col } from 'react-bootstrap'
import scholarshipImage from '../../../../client/src/images/scholarship.png'

const Home = () => {
  return (
    <>
    <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1" data-aos="fade-up" data-aos-duration="800">
              <h1 className="main-heading">
                Welcome to <span>Scholarix!</span>
                <br />
              </h1>
              <p className="info-text">Empowering Dreams, Fueling Future</p>
              <p className="info-text">Welcome to Scholarix, where dreams meet opportunities and aspirations take flight! We believe in the power of education to transform lives and shape a better future. Our platform is dedicated to connecting passionate students with the financial support they need to pursue their academic goals and make a positive impact in their communities and beyond.</p>
              <div className="btn_wrapper">
                <a href='/scholarships'>
                <button
                  className="btn view_more_btn"
                  style={{
                    backgroundColor: "1A4D2E",
                    color: "#fff",
                    width: "200px",
                  }}
                >
                  view Scholarships
                  <i className="ri-arrow-right-line" />
                </button></a>
              </div>
            </div>
            <div className="grid-item-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="team_img_wrapper">
                <img src={scholarshipImage} alt="Scholarship"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home