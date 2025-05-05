import React from "react";
import { expertiseData } from "../Data/data"
import CountUp from 'react-countup';
import { Link } from "react-router-dom";
import aboutimg from "../assets/images/aboutimg.png";
import 'animate.css';


export default function AboutUs() {

    return (
        <section className="relative md:py-24 py-16" id="about">
            <div className="container">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    

                    <div className="lg:col-span-7">

                    <div className="absolute commerce">
                                <h6 className="font-semibold">ECommerce </h6>
                                <span className="text-2xl font-medium text-amber-500 mb-0"><span className="counter-value font-bold" data-target="7"><CountUp
                                    start={7}
                                    className="counter-value"
                                    end={100}
                                    duration={2.75} /></span>+</span>
                                <span className="text-sm text-slate-400">Projects <br /> Completed</span>
                            </div>

                        <div className="lg:ms-5">

                        

                            <h6 className="about">ABOUT US</h6>
                            <div className=" text-border" ></div>

                            <h2 className="mb-6 md:text-2xl text-[44px] md:leading-normal leading-normal font-poppins">Bespoke software solutions that solve
                                real business problems.</h2>

                            <p className="text-slate-400 max-w-xl text-[15px]">I'm Numan Akram, a passionate web designer with 6 years of experience in crafting clean, modern websites.
                                I specialize in creating visually appealing and user-friendly designs that leave a lasting impression.
                                Alongside web design, I also develop custom software solutions tailored to unique business needs.
                                Every project I take on is a blend of creativity, strategy, and cutting-edge technology.</p>
                            <p className="text-slate-400 max-w-xl text-[15px] mt-6">Your vision is my priority,
                                and I’m here to bring it to life with passion and care.

                            </p>

                            <div className="mt-6">
                                <Link to="#project" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2">See Work</Link>
                            </div>


                        </div>
                        
                    </div>



                    <div className="lg:col-span-5 lg:px-8">
                        <div className="relative">
                            <img src={aboutimg} className="animate__animated animate__fadeInRight rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800" alt="" />

                            

                        </div>
                    </div>

                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Hobbies & Expertise</h3>
                    <div className=" Hobbies-border" ></div>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {expertiseData.map((item, index) => {
                        const Icon = item.Icon
                        return (
                            <div className="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900" key={index}>
                                <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                                    <div className="rotate-45">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-0 text-[17px] font-medium">{item.title}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}