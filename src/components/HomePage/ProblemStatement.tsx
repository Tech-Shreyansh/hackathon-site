import React, { useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProblemStatement = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000, // Adjust the speed of the carousel
        // autoplaySpeed: 3000, // Adjust the time between slides
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Medium devices (tablets, 768px and up)
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, // Small devices (landscape phones, 576px and up)
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576, // Extra small devices (portrait phones, under 576px)
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    };
    const problemStatements = [
        {
            Heading: "Heading1",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima",
        },
        {
            Heading: "Heading2",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima",
        },
        {
            Heading: "Heading3",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima",
        },
        {
            Heading: "Heading4",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima",
        },
        {
            Heading: "Heading5",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima",
        },
        {
            Heading: "Heading6",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima",
        },
    ]

    const sliderRef = useRef<Slider>(null);

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className="bg-orange-400 p-8 flex flex-col gap-8 border-b-4 border-black">
            <p className="text-4xl lg:text-5xl text-center font-extrabold">Problem Statements</p>
            <Slider ref={sliderRef} {...settings}>
                {problemStatements.map((statement, index) => (
                    <div className="px-4">
                        <div
                            key={index}
                            className="p-2 space-y-2 rounded-md border-2 border-black bg-[#bc95d4] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left"
                        >
                            <p className="text-xl font-bold">{statement.Heading}</p>
                            <p>{statement.Description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex w-1/4 mx-auto items-center gap-4">
                <button
                    role="button"
                    aria-label="Click to perform an action"
                    onClick={prevSlide}
                    className="w-1/2 justify-center flex cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                >
                    <p>Previous</p>
                </button>
                <button
                    role="button"
                    aria-label="Click to perform an action"
                    onClick={nextSlide}
                    className="w-1/2 justify-center flex cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                >
                    <p>Next</p>
                </button>
            </div>
        </div>
    );
};

export default ProblemStatement;