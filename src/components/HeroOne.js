import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import homeimg from "../assets/images/homeimg.png";
import '../assets/css/tailwind.css';

export default function HeroOne() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/public/Numan-Akram-cv.pdf'; // path relative to public folder
        link.download = '/public/Numan-Akram-cv.pdf'; // the filename after download
        link.click();
    }

    return (
        <>
            <section className="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5" id="home">
                <div className="absolute inset-0" id="overlay"></div>
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div>
                            <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">Hey! I'm <br />
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        ' NumanRP',
                                        1000,
                                        'Costum Softwear Developer',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Website Designer',
                                        1000,
                                        'Web Developer',
                                        1000,
                                        'UI/UX Designer',
                                        1000,
                                        'Website Migration & Deployment',
                                        1000,
                                        'Custom ECommerce solutions',
                                        1000, 'Shopify, WooCommerce',
                                        1000, 'Payment gateway integration',
                                        1000, 'Custom CMS builds',
                                        1000, 'Single Page Applications (SPA)',
                                        1000,
                                        'SEO & Performance Optimization',
                                        1000, 'Website Migration & Deployment',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className="typewrite text-amber-500"
                                    repeat={Infinity}
                                />
                                <span className="typewrite text-amber-500" data-period="2000" data-type='[ "Dennis Scott", "Website Designer", "Web Developer", "UI/UX Designer" ]'> <span className="wrap"></span> </span></h4>
                            <p className="text-slate-400 max-w-xl">I'm a professional web designer with years of experience crafting modern, user-friendly websites.
                                My goal is to deliver visually stunning designs that are both functional and engaging.
                                Every project I take on is built with passion, precision, and creativity.
                                Let’s create a website that truly represents your brand and drives results.
                            </p>
                            <div className="mt-6">
                                <Link to="" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md">Hire Me</Link>
                                {/* <Link href="/Numan-Akram-cv.pdf" download="Numan-Akram-cv.pdf" to="" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500
                                s hover:text-white rounded-md ms-1">Download CV</Link> */}

                                <a  href="/Numan-Akram-cv.pdf" download="My_CV.pdf  ">
                                    <button className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500
                                s hover:text-white rounded-md ms-1">Download CV</button>
                                </a>

                            </div>
                        </div>

                        <div className="relative">
                            <img src={homeimg} alt="" />

                            <div className="absolute lg:bottom-80 md:bottom-10 bottom-2 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <span className="text-3xl font-medium mb-0"><span className="counter-value font-bold" data-target="125"> <CountUp
                                    start={7}
                                    className="counter-value"
                                    end={180}
                                    duration={2.75} /></span>+</span>
                                <h6 className="text-sm text-slate-400 mt-1">Project Completed</h6>
                            </div>

                            <div className="absolute lg:top-80 md:top-26 top-28 ltr:md:-right-0 ltr:right-2 rtl:md:-left-0 rtl:left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <h6 className="font-semibold">Web Designer</h6>
                                <h6 className="text-sm text-slate-400 mt-1">7+ Years Experience</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
                    <Link to="#about"><i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
                </div>
            </div>
        </>
    )
} 