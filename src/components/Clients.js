import React from "react";
import { Link } from "react-router-dom";

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css';
// import { images } from '../assets/images/Testimonial';

import { review } from "../Data/data";
import  Terminal1  from "../assets/images/Testimonial/testimonial1.png";
import Terminal2  from "../assets/images/Testimonial/testimonial2.png";
import Terminal3 from "../assets/images/Testimonial/testimonial3.png";
import Terminal4 from "../assets/images/Testimonial/testimonial4.png";
import Terminal5 from "../assets/images/Testimonial/testimonial5.png";




const images = {
    Terminal1,
    Terminal2,
    Terminal3,
    Terminal4,
    Terminal5,
  };

const settings = {
    lazyload: true,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
}
export default function Clients(){
   
    return(
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Client's Review</h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
                    Hear what clients say about my web development services — from design quality to project delivery.
                    Real feedback from real clients who’ve experienced results-driven, professional solutions.
                    </p>
                </div>
                <div className="grid relative grid-cols-1 mt-8">
                    <div className="tiny-three-item">
                        <TinySlider settings={settings}>
                            {
                                review.map((item, index) => (
                                    <div className="tiny-slide" key={index}>
                           
                                        <div className="customer-testi">
                                            <div className="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                                <i className="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                                                <p className="text-slate-400 text-[15px]">{item.desc}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-3">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                            
                                            <div className="text-center mt-5">
                                            <img src={Terminal2} className="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                                            <img src={Terminal5} className="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>

                                                <img src={Terminal3} className="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                                                <Link to="" className="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">{item.name}</Link>
                                                <span className="text-slate-400 text-sm block">{item.designation}</span>
                                            </div>
                                        </div>
                                    
                                    </div>
                                ))
                            }
                        </TinySlider>

                    </div>
                </div>
            </div>
        </section>
    )
}