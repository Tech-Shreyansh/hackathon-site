import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {

    const faqs = [
        {
            question: "What is the purpose of the hackathon organized by the college SDC department?",
            answer: "The hackathon aims to foster innovation and collaboration among 2nd and 3rd-year students, providing a platform to showcase and enhance their programming skills through creative projects."
        },
        {
            question: "Who can participate in the hackathon?",
            answer: "The hackathon is open to all 2nd and 3rd-year students of the college. It's a great opportunity for students interested in technology and coding to come together and work on exciting projects."
        },
        {
            question: "How can I register for the hackathon?",
            answer: "To register for the hackathon, you can visit the official event website or reach out to the SDC department. Registration details and deadlines will be provided on the platform."
        },
        {
            question: "What are the key themes or focus areas for the hackathon projects?",
            answer: "The hackathon encourages a diverse range of projects. While there may be suggested themes, participants are free to explore various areas such as web development, mobile apps, AI, or anything that aligns with their interests and skills."
        },
        {
            question: "Are there any prerequisites or specific skills required to participate?",
            answer: "No specific prerequisites are needed. The hackathon is designed to be inclusive, welcoming participants with varying skill levels. Whether you're a beginner or an experienced coder, you'll find opportunities to learn and contribute."
        },
    ];

    return (
        <div id="faqs" className="bg-yellow-400 px-8 py-12  flex flex-col gap-8 border-b-4 border-black">
            <p className="text-4xl lg:text-5xl text-center font-extrabold">Frequently Asked Questions</p>
            <div className="flex flex-col gap-4 m-4">
                {faqs.map((faq)=><Accordion question={faq.question} answer={faq.answer} />)}
            </div>
        </div>
    );
};

export default FAQ;