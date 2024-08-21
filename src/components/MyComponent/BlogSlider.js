// BlogSlider.js
import React from 'react';
import SwiperCore, { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// Install Swiper modules
SwiperCore.use([Pagination, EffectFade]);

const BlogSlider = () => {
  return (
    <div className="blog-slider">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop={true}
        pagination={{
          el: '.blog-slider__pagination',
          clickable: true,
        }}
        mousewheel={{
          invert: false,
        }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="blog-slider__item">
            <div className="blog-slider__img">
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">Lorem Ipsum Dolor</div>
              <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
              <a href="#" className="blog-slider__button">READ MORE</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-slider__item">
            <div className="blog-slider__img">
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
              <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
              <a href="#" className="blog-slider__button">READ MORE</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-slider__item">
            <div className="blog-slider__img">
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">Lorem Ipsum Dolor</div>
              <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
              <a href="#" className="blog-slider__button">READ MORE</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default BlogSlider;
