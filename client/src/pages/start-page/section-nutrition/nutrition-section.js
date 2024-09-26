import React, {Component} from 'react';
import fat from "../../../img/fat.png";
import fruit from "../../../img/fruit.png";
import protein from "../../../img/protein.png";
import food_1 from "../../../img/food_1.png"
import food_2 from "../../../img/food_2.png"
import food_3 from "../../../img/food_3.png"
import food_4 from "../../../img/food_4.png"
import SwiperCore, {  Pagination, EffectFade, Scrollbar,Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import './nutrition-section.css'
import 'swiper/swiper-bundle.css'

SwiperCore.use([ Pagination, EffectFade, Scrollbar,Autoplay]);

const NutritionSectionContent = () => {
    const foods = [food_1,food_2,food_3,food_4];
    const slides = foods.map((food,i) =>
            <SwiperSlide className="nutrition-img__slider" tag="li" key={`slide=${i}`}>
                 <img src={food}/>
            </SwiperSlide>
    )

    return (
        <React.Fragment>
            <div className="nutrition-background">
                <div className="nutrition-description">
                    <h1>CREATE YOUR
                        DIET</h1>
                    <div className="nutrition-icons">
                        <div className="nutrition-icon__container">
                            <div className="nutrition-icon__content">
                                <img src={protein}/>
                                <p>Protein</p>
                            </div>
                            <div className="nutrition-icon__content">
                                <img src={fat}/>
                                <p>Fat</p>
                            </div>
                            <div className="nutrition-icon__content">
                                <img src={fruit}/>
                                <p>Сarbs</p>
                            </div>
                        </div>
                    </div>
                    <h2>Special for you creating a nutrition program

                        You can keep track of your diet by counting the number of calories in each meal,
                        without going over
                        the limit</h2>
                </div>
                <Swiper
                    className="nutrition-img"
                    tag="ul"
                    pagination={{clickable: true}}
                    autoplay={{delay:2000, disableOnInteraction: false }}
                    effect="fade"
                    >
                    <div className="swiper-wrapper">
                    {slides}
                    </div>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
</React.Fragment>
)
}
export default NutritionSectionContent;
