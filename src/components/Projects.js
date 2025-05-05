import React,{useState} from "react";
import { Link as Link2 } from "react-router-dom";
import * as Unicons from '@iconscout/react-unicons'
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';

import projectimg from "../assets/images/projects/pro1.png";
import projectimg2 from "../assets/images/projects/pro2.png";
import projectimg3 from "../assets/images/projects/ecommrc.png";
import projectimg4 from "../assets/images/projects/pro4.png";
import projectimg5 from "../assets/images/projects/project1.png";
import projectimg6 from "../assets/images/projects/pro6.png";
import projectimg7 from "../assets/images/projects/pro7.png";
import projectimg8 from "../assets/images/projects/project9.jpg";



const images = [
    "/images/projects/pro1.png",
    "/images/projects/pro1.png",
    "/images/projects/pro1.png",
    "/images/projects/pro1.png",
    "/images/projects/pro1.png",
    "/images/projects/pro1.png",
    "/images/projects/pro1.png",
    "/images/projects/pro1.png",
];

export default function Projects(){
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);


    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(!isOpen);
    }

    return(
        <>
           <section className="relative md:py-24 py-16" id="project">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Creative Solutions I’ve Delivered</h3>

                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">A collection of my professional work showcasing web design, development, and custom software projects.
                Each project reflects my dedication to clean code, user-friendly design, and real-world functionality.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src={projectimg} alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Portfolio Web Design</Link2>
                        <span className="block text-sm text-slate-400">UI / UX Design</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link2 to="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src={projectimg2} alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Website Redesigns</Link2>
                        <span className="block text-sm text-slate-400">Technology</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="#" onClick={() => handleCLick(1)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src={projectimg3} alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500"> Services Provider</Link2>
                        <span className="block text-sm text-slate-400">Landing</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="#" onClick={() => handleCLick(2)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src={projectimg4} alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">CMS-Based Projects</Link2>
                        <span className="block text-sm text-slate-400">Elementor</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="#" onClick={() => handleCLick(3)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src={projectimg5} alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Shopify-Experts Web Design</Link2>
                        <span className="block text-sm text-slate-400">Landing</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="#" onClick={() => handleCLick(3)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src={projectimg6} alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500"> Full Website Development</Link2>
                        <span className="block text-sm text-slate-400">Digital</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="#" onClick={() => handleCLick(5)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src={projectimg7} alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">E-Commerce Solutions Experts</Link2>
                        <span className="block text-sm text-slate-400">Store</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="#" onClick={() => handleCLick(6)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src={projectimg8} alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Custom Web Applications</Link2>
                        <span className="block text-sm text-slate-400">Multipurpose</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="#" onClick={() => handleCLick(7)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16}/></Link2>
                    </div>
                </div>
            </div>
        </div>
    </section>
        {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setOpen(false)}
                onMovePrevRequest={() =>
                setActiveIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                setActiveIndex((photoIndex + 1) % images.length)
                }
            />
        )}

        </>
     
    )
}