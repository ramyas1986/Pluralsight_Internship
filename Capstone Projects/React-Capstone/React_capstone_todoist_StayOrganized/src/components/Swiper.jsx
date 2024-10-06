import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import testimonial1 from '../testimonials/testimonials-1.jpg';
import testimonial2 from '../testimonials/testimonials-2.jpg';
import testimonial3 from '../testimonials/testimonials-3.jpg';
import testimonial4 from '../testimonials/testimonials-4.jpg';
import testimonial5 from '../testimonials/testimonials-5.jpg';

SwiperCore.use([Autoplay]);
function SwiperTestimonial() {


/* ======= Testimonials Section ======= */
    return (
        <>
            <Swiper 
                 breakpoints={{
                    1024: {
                      slidesPerView: 3,
                    },
                    768: {
                    //   width: 576,
                      slidesPerView: 2,
                    },
                  }}
            
            
                spaceBetween={30} slidesPerView={1} centeredSlides={true} autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className='testimonial-item'>
                        <img src={testimonial1} className="testimonial-img" alt="" />
                        <h3>Ramón B.</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <p>
                            <i>
                                “At work, my team uses Todoist as a central productivity repository. At home, my family also shares
                                everything with Todoist: Shopping lists, chores, etc.”
                            </i>
                        </p>
                    </div>{/* End testimonial item */}
                </SwiperSlide>

                <SwiperSlide>
                    <div className='testimonial-item'>
                        <img src={testimonial2} className="testimonial-img" alt="" />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <p><i>“Thanks to Todoist, my life feels like a string of successful days, full of progress and forward
                            momentum.”</i></p>
                    </div>{/* End testimonial item */}
                </SwiperSlide>

                <SwiperSlide>
                    <div className='testimonial-item'>
                        <img src={testimonial3} className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p><i>“Todoist helps me organize my time based on the most important things in my life. As a result, I am
                                happier and more confident.”</i></p>  
                    </div>{/* End testimonial item */}
                </SwiperSlide>

                <SwiperSlide>
                    <div className='testimonial-item'>
                        <img src={testimonial4} className="testimonial-img" alt="" />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                        <p><i>“I can finally see an overview of all the areas of my life – broken down into actionable steps – in
                                one single place.”</i></p>
                    </div>{/* End testimonial item */}
                </SwiperSlide>

                <SwiperSlide>
                    <div className='testimonial-item'>
                        <img src={testimonial5} className="testimonial-img" alt="" />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <p><i>“After using Todoist personally, I introduced it to my team for project management. We love that
                            workspaces allow us to separate our business tasks and projects from our personal ones!”</i></p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <style jsx="true">{`
.swiper {
    width: 80%;
    height: 80%;
  }
  
  .swiper-slide {
    text-align: center;
    width: 80%;
  }

  .swiper-slide h3{
    font-size:18px;
    font-weight: bold;
    margin: 25px 0 5px 0;
    color: #111;
  } 

  .swiper-slide h4{
    font-size: 14px;
    color: #999;
    margin: 0;
  }
  
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  
  .swiper-slide:nth-child(3n) {
    width: 40%;
  }
  .testimonial-item {
    float: left;
    box-sizing: content-box;
    padding: 30px;
    margin: 30px 15px;
    min-height: 200px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    position: relative;
    background: #fff;
    border-radius: 15px;
  }
  
  .testimonial-item .testimonial-img {
    width: 90px;
    border-radius: 10px;
    border: 6px solid #fff;
    float: left;
    margin: 0 10px 0 0;
  }
  
  .testimonial-item p {
    font-style: italic;
    margin: 30px auto 15px auto;
  }
}
  
             `}
            </style>

        </>
    )
}

export default SwiperTestimonial;