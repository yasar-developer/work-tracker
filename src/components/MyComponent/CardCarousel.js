// BlogSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-fade'; // Import Swiper Effect Fade styles
import 'swiper/css/pagination'; // Import Swiper Pagination styles

import { Pagination, EffectFade } from 'swiper';

const BlogSlider = () => {
  return (
    <div className="blog-slider">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, EffectFade]}
        className="swiper-container"
      >
        <SwiperSlide className="blog-slider__item">
          <div className="blog-slider__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="blog-slider__item">
          <div className="blog-slider__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="blog-slider__item">
          <div className="blog-slider__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
