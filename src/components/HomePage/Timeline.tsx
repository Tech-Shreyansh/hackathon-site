import React, { useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Timeline = () => {

    const timeline = [
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
        {
            time: "12 p.m.",
            event: "Activity 1",
        },
        {
            time: "1 p.m.",
            event: "Lunch",
        },
        {
            time: "3 p.m.",
            event: "Activity 2",
        },
        {
            time: "4 p.m.",
            event: "Activity 3",
        },
        {
            time: "6 p.m.",
            event: "Coding Phase Ends",
        },
    ];

    return (
        <div className="bg-indigo-400 p-8 flex flex-col gap-8 border-b-4 border-black">
            <p className="text-5xl text-center font-extrabold">Timeline</p>
            <div className="flex justify-around">
                <div className="w-1/4 rounded-md border-2 border-black bg-yellow-100 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-2xl text-center p-4 font-bold"> DAY 1</p>
                    <div className="flex flex-col gap-4 p-4">
                        {timeline.map((event)=>
                            <div className="flex gap-4 justify-center">
                                <div className="w-1/4 p-2 text-xs rounded-full border border-black bg-[#bc95d4] text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                                    <p>{event.time}</p>
                                </div>
                                <div className="w-1/2 rounded-md border-2 border-black bg-green-200 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 text-xs">
                                    <p>{event.event}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-1/4 rounded-md border-2 border-black bg-yellow-100 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-2xl text-center p-4 font-bold"> DAY 2</p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;