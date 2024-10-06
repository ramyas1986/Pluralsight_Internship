import { useEffect } from 'react';
// import '../App';
import home_image from '../images/maxresdefault.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import SwiperTestimonial from './Swiper';

function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
    return (
      <div>
        {/* <h1 style={{textAlign: "center"}}>It is the home page</h1> */}
        <div>
        {/* ======= Hero Section ======= */}
        <div className="container container-fluid mt-5" data-aos="zoom-out" data-aos-delay={100}>
          <div className="row">
            <div className="col-md-8 mt-5">
              <img className="img-fluid" src={home_image} alt="home"/>
            </div>
            <div className="col-md-4 mt-5">
              <h2 className="mt-5">Organize your work and life, finally.</h2>
              <h4 className="mt-5">Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</h4>
              <a className="btn btn-danger mt-4" href="/displayusertodos">Get Started</a>
            </div>
          </div>
        </div>
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
              <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch">
                  <div className="content">
                    <h6 style={{textAlign: 'left'}}>Clear your mind</h6>
                    <h2>The fastest way to get tasks out of your head.</h2>
                    <p>
                      Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition
                      will instantly fill your to-do list.
                    </p>
                    <a href="/" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right" /></a>
                  </div>
                </div>
                <div className="col-xl-7 d-flex align-items-stretch">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                        <i className="bx bx-receipt" />
                        <h6 style={{textAlign: 'left'}}>Focus on what’s important</h6>
                        <h2>Reach that mental clarity you’ve been longing for.</h2>
                        <p>Your tasks are automatically sorted into Today, Upcoming, and custom filter views to help you
                          prioritize your most important work.</p>
                      </div>
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                        <i className="bx bx-cube-alt" />
                        <h6 style={{textAlign: 'left'}}>Organize your teamwork, too</h6>
                        <h2>Where all your tasks can finally coexist.</h2>
                        <p>Give your team a shared space to collaborate and stay on top of it all – alongside but separate
                          from your personal tasks and projects.</p>
                      </div>
                    </div>
                  </div>{/* End .content*/}
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= features Section ======= */}
          <section id="features" className="features section-bg ">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Features</h2>
                <p />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                    <i className="bi bi-briefcase" />
                    <h4>Capture tasks at the speed of thought</h4>
                    <p />
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bi bi-card-checklist" />
                    <h4>Organize, prioritize, and get things done</h4>
                    <p />
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bi bi-bar-chart" />
                    <h4>Focus on the right things at the right time</h4>
                    <p />
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bi bi-binoculars" />
                    <h4>You got it all done. Now see your progress!</h4>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End features Section */}
          
        </main>{/* End #main */}
      </div>
      <SwiperTestimonial />
      </div>
      
    );

  }
  
  export default Home;