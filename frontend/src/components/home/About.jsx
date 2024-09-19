import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);
    const headRef = useRef([]);

    useGSAP(() => {
        headRef.current.forEach((ref, index) => {
            gsap.from(ref, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 25%',
                    end: 'top 15%',
                    toggleActions: 'play none none reverse',
                    scrub: 1,
                },
            });
        });

        // Animate the marquee text
        gsap.to('.marquee1', {
            x: '-100%',
            ease: 'none',
            duration: 10,
            repeat: -1,
        });
        gsap.to('.marquee2', {
            x: '100%', // Move marquee2 to the right
            ease: 'none',
            duration: 10,
            repeat: -1,
        });
        gsap.to('.marquee3', {
            x: '-100%',
            ease: 'none',
            duration: 10,
            repeat: -1,
        });
    });

    return (
        <div ref={aboutRef} className='w-screen min-h-[620px] relative grid grid-rows-3'>
            <div className="absolute bottom-0 left-0 right-0 z-50">
                <div className="mx-auto h-full flex max-w-7xl items-end justify-start p-4 md:p-8">
                    <div className='w-full flex flex-col'>
                        <div ref={(el) => (headRef.current[0] = el)} className='w-4/5 h-40 overflow-hidden'>
                            <img src="https://assets.lummi.ai/assets/QmYq1Ev4L2oR2pTVACav6DNqutyXsRk56UtLFv2YurUsoH?auto=format&w=1500" className='w-full h-full object-cover rounded-md' alt="" />
                        </div>
                        <h1 ref={(el) => (headRef.current[1] = el)} className="mb-6 max-w-4xl text-6xl font-black leading-[1.1] dark:text-white/90 text-dark/90 md:text-8xl">
                            The Pros Train with <span className="text-primary">Plates</span>
                        </h1>
                        <p ref={(el) => (headRef.current[2] = el)} className="max-w-xl dark:text-white/50 text-dark/50 md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                            optio quam voluptates accusantium unde labore maiores delectus tempora
                            velit cum.
                        </p>
                    </div>
                </div>
            </div>

            {/* BG Text marquee */}
            <div className=" flex -translate-y-12 select-none overflow-hidden">
                <div className="marquee1 flex whitespace-nowrap">
                    <span className="w-fit text-[20vmax] font-black uppercase leading-[0.75] text-dark/20 dark:text-white/20">Live inspired</span>
                </div>
                <div className="marquee1 flex whitespace-nowrap">
                    <span className="ml-48 w-fit text-[20vmax] font-black uppercase leading-[0.75] text-dark/20 dark:text-white/20">Live inspired</span>
                </div>
            </div>
            <div className="flex -translate-y-12 select-none overflow-hidden">
                <div className="marquee2 flex whitespace-nowrap">
                    <span className="w-fit text-[20vmax] font-black uppercase leading-[0.75] text-dark/20 dark:text-white/20">Live inspired</span>
                </div>
                <div className="marquee2 flex whitespace-nowrap">
                    <span className="ml-48 w-fit text-[20vmax] font-black uppercase leading-[0.75] text-dark/20 dark:text-white/20">Live inspired</span>
                </div>
            </div>
            <div className=" flex -translate-y-12 select-none overflow-hidden">
                <div className="marquee3 flex whitespace-nowrap">
                    <span className="w-fit text-[20vmax] font-black uppercase leading-[0.75] text-dark/20 dark:text-white/20">Live inspired</span>
                </div>
                <div className="marquee3 flex whitespace-nowrap">
                    <span className="ml-48 w-fit text-[20vmax] font-black uppercase leading-[0.75] text-dark/20 dark:text-white/20">Live inspired</span>
                </div>
            </div>
        </div>
    );
}

export default About;
