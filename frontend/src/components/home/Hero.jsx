import React from 'react'
import FitText from '../common/FitText'
import LittleMarquee from '../common/Marquee'
import { GoArrowLeft, GoArrowUp, GoBeaker } from 'react-icons/go';

const list = [
    {
        text: "WEB DEVELOPMENT",
        icon: <GoBeaker size={25} color='#F6AB00' />
    },
    {
        text: "WEB DEVELOPMENT",
        icon: <GoBeaker size={25} color='#F6AB00' />
    },
    {
        text: "WEB DEVELOPMENT",
        icon: <GoBeaker size={25} color='#F6AB00' />
    },
    {
        text: "WEB DEVELOPMENT",
        icon: <GoBeaker size={25} color='#F6AB00' />
    },
    {
        text: "WEB DEVELOPMENT",
        icon: <GoBeaker size={25} color='#F6AB00' />
    },
    {
        text: "WEB DEVELOPMENT",
        icon: <GoBeaker size={25} color='#F6AB00' />
    },
    {
        text: "WEB DEVELOPMENT",
        icon: <GoBeaker size={25} color='#F6AB00' />
    },
]

const Hero = () => {
    return (
        <div className='pt-32 w-screen overflow-x-hidden flex justify-center items-start min-h-dvh h-full'>
            <div className='lg:max-w-4xl w-full flex flex-col items-center gap-5'>
                <div className='flex justify-center items-center rounded-full border dark:bg-light border-dark dark:border-light gap-1 p-2 transition-all duration-200 relative animate-bounce mt-10'>
                    {/* <div className='absolute bg-grey inset-0 -z-10'></div> */}
                    <div className='bg-primary text-light rounded-full px-3 py-1 uppercase'>
                        Hey!
                    </div>
                    <div className='dark:text-dark'>
                        Welcome to PRISTINE

                    </div>
                    <div className='rotate-45 '>
                        <GoArrowUp className='dark:text-dark' />
                    </div>
                </div>

                <div className='text-4xl md:text-5xl xl:text-6xl w-11/12 text-center font-extrabold '>
                    <p>Welcome to the Landing page of&nbsp;
                        <span className='relative'>
                            PRISTINE
                            <svg aria-hidden="true" viewBox="0 0 418 42"
                                className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-primary/50"
                                preserveAspectRatio="none">
                                <path
                                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                                </path>
                            </svg>
                        </span>
                    </p>
                </div>
                <div className='text-xl xl:text-2xl text-center text-dark/50 dark:text-light/50 w-10/12'>
                    <p>Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.</p>
                </div>

                <div>
                    <button className='border dark:border-white border-dark p-3 rounded-md active:scale-90 transition-all duration-200'>Get started - <span>no CC required</span></button>
                </div>
                <div className=" h-36 w-[calc(100vw_-_56px)] max-w-[1100px]  overflow-hidden rounded-t-xl bg-zinc-900 p-0.5">
                    <div className="flex items-center justify-between px-2 py-1">
                        <div className="flex items-center gap-0.5">
                            <span className="size-2 rounded-full bg-red-400"></span>
                            <span className="size-2 rounded-full bg-yellow-400"></span>
                            <span className="size-2 rounded-full bg-green-400"></span>
                        </div>
                        <span className="rounded bg-zinc-600 px-2 py-0.5 text-xs text-zinc-100">
                            www.pristine.com
                        </span>
                        <svg
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-dark"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div className="relative z-0 grid h-full w-full grid-cols-[100px,_1fr] overflow-hidden rounded-t-lg bg-white md:grid-cols-[150px,_1fr]">
                        <div className="h-full border-r border-zinc-300 p-2">
                            <img src="https://ik.imagekit.io/hfrhxebxv/Elanine_Assets/Elanine_logo_2_1_-1.png?updatedAt=1722144762626" width={25} alt="" />
                            <div className="mt-3 space-y-1.5">
                                <span className="flex items-center gap-1.5 text-xs text-primary">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>Messages</span>
                                </span>
                                <span className="flex items-center gap-1.5 text-xs">
                                    <svg
                                        stroke="black"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span className='dark:text-dark'>Tasks</span>
                                </span>
                                <span className="flex items-center gap-1.5 text-xs">
                                    <svg
                                        stroke="black"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line x1="8" y1="6" x2="21" y2="6"></line>
                                        <line x1="8" y1="12" x2="21" y2="12"></line>
                                        <line x1="8" y1="18" x2="21" y2="18"></line>
                                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                    </svg>
                                    <span className='dark:text-dark'>Board</span>
                                </span>
                            </div>
                        </div>
                        <div className="relative z-0 p-2">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="rounded bg-grey/30 px-1.5 py-1 pr-8 text-xs text-grey">
                                    Search...
                                </span>
                                <div className="flex items-center gap-1.5 text-xl">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-primary"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                            </div>
                            <div className="h-full rounded-xl border border-dashed border-zinc-500 bg-zinc-100"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-white/0 to-white"></div>
                    </div>
                </div>


                <div className='-rotate-2 w-screen overflow-x-hidden -translate-y-1/2'>
                    <LittleMarquee list={list} direction="left" />
                    <LittleMarquee list={list} direction="right" />
                </div>

            </div>


        </div>
    )
}

export default Hero