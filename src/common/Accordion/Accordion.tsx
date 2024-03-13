import { useRef, useState } from "react";
import { FAQs } from "../../utils/constants";
import './Accordion.scss';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function AccordionItem({
    question,
    answer,
    isOpen,
    onClick,
}: AccordionItemProps) {
    const contentHeight = useRef<HTMLDivElement>(null);
    return (
        <div className="accordion__item">
            <button
                className={`question-container ${isOpen ? "active" : ""}`}
                onClick={onClick}
            >
                <p className="question-content">{question}</p>
                <div className={`accordion-toggle ${isOpen ? "active" : ""}`}></div>
            </button>

            <div
                ref={contentHeight}
                className="answer-container"
                style={
                    isOpen
                        ? { height: contentHeight.current?.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p className="answer-content">{answer}</p>
            </div>
        </div>
    );
}

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
    };
    return (
        <div className="accordion">
            {FAQs.map((item, i) => (
                <AccordionItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === i}
                    onClick={() => handleItemClick(i)}
                />
            ))}
        </div>
    );
}
