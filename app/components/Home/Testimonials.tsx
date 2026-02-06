'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles via CDN in layout instead
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    text: "Loan Bolt is not just a payments platform, it is a comprehensive solution. The global network, security and variety of options make it my number one option for all my transactions.",
    name: "Bett Nilsen",
    image: "/img/faces/2.jpg"
  },
  {
    id: 2,
    text: "The speed and reliability of Loan Bolt have transformed how I do business internationally. Their customer support is exceptional and always available when needed.",
    name: "Karl Andreassen",
    image: "/img/faces/1.jpg"
  },
  {
    id: 3,
    text: "As someone who frequently sends money overseas, Loan Bolt has saved me both time and money. The interface is intuitive and the security features give me peace of mind.",
    name: "Rüdiger Karlsen",
    image: "/img/faces/3.jpg"
  }
];

export default function Testimonials() {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mil-testimonials mil-p-0-160">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 mil-relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{
                el: paginationRef.current,
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="${className}"></span>`;
                },
              }}
              onBeforeInit={(swiper) => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }
                if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
                  swiper.params.pagination.el = paginationRef.current;
                }
              }}
              className="mil-testimonials-1 mil-up"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <blockquote className="mil-center">
                    <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mil-mb-30 mil-up">
                      <path d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z" fill="#03A6A6" />
                      <path d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z" fill="#03A6A6" />
                    </svg>
                    <p className="mil-mb-60 mil-up">{testimonial.text}</p>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="mil-mb-15 mil-up"
                      style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <h5 className="mil-up">{testimonial.name}</h5>
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="mil-slider-nav-1">
              <div ref={navigationPrevRef} className="mil-testi-prev">
                <i className="fas fa-chevron-left"></i>
              </div>
              <div ref={navigationNextRef} className="mil-testi-next">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
            
            <div ref={paginationRef} className="mil-testi-pagination mil-up"></div>
          </div>
        </div>
      </div>
    </div>
  );
}