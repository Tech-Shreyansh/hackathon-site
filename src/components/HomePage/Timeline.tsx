import React, { useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Timeline = () => {

    const timeline_day1 = [
        {
            time: "9:15 a.m.",
            event: "Reporting Time",
        },
        {
            time: "9:30 a.m.",
            event: "Opening",
        },
        {
            time: "10 a.m.",
            event: "Coding Phase Starts",
        },
        // {
        //     time: "12 p.m.",
        //     event: "Activity 1",
        // },
        {
            time: "1 p.m.",
            event: "Lunch",
        },
        // {
        //     time: "3 p.m.",
        //     event: "Activity 2",
        // },
        // {
        //     time: "4 p.m.",
        //     event: "Activity 3",
        // },
        {
            time: "6 p.m.",
            event: "Coding Phase Ends",
        },
        {
            time: "8 p.m.",
            event: "Finalist Selection",
        },
    ];
    const timeline_day2 = [
        {
            time: "1 p.m.",
            event: "Day 2 starts",
        },
        {
            time: "1:30 p.m.",
            event: "Presentation begins",
        },
        {
            time: "4 p.m.",
            event: "Presentaion ends",
        },
        // {
        //     time: "12 p.m.",
        //     event: "Activity 1",
        // },
        {
            time: "5 p.m.",
            event: "Results",
        },
        // {
        //     time: "3 p.m.",
        //     event: "Activity 2",
        // },
        // {
        //     time: "4 p.m.",
        //     event: "Activity 3",
        // },
        {
            time: "5:30 p.m.",
            event: "Closing Ceremony",
        },
    ];

    return (
        <div id="timeline" className="bg-indigo-400 px-8 py-12  flex flex-col gap-8 border-b-4 border-black">
            <p className="text-4xl lg:text-5xl text-center font-extrabold">Timeline</p>
            <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
                <div className="md:w-2/5 lg:w-1/3 rounded-md border-2 border-black bg-yellow-100 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-2xl text-center p-4 font-bold"> DAY 1</p>
                    <div className="flex flex-col gap-4 p-4">
                        {timeline_day1.map((event)=>
                            <div className="flex gap-4 justify-center">
                                <div className="w-1/3 md:w-1/4 p-2 text-xs rounded-full border border-black bg-[#bc95d4] text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none flex items-center justify-center">
                                    <p>{event.time}</p>
                                </div>
                                <div className="w-1/2 rounded-md border-2 border-black bg-green-200 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 text-xs">
                                    <p>{event.event}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:w-2/5 lg:w-1/3 rounded-md border-2 border-black bg-yellow-100 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-2xl text-center p-4 font-bold"> DAY 2</p>
                    <div className="flex flex-col gap-4 p-4">
                        {timeline_day2.map((event)=>
                            <div className="flex gap-4 justify-center">
                                <div className="w-1/3 md:w-1/4 p-2 text-xs rounded-full border border-black bg-[#bc95d4] md:text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none flex items-center justify-center">
                                    <p>{event.time}</p>
                                </div>
                                <div className="w-1/2 rounded-md border-2 border-black bg-green-200 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 text-xs">
                                    <p>{event.event}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;