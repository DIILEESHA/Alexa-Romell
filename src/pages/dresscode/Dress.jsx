import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./dress.css";
const DressCode = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 const dressCodeSections = [
  {
    question: "Our Request",
    answer: (
      <>
        <p>
          We kindly ask all guests to wear formal black attire to help create a
          cohesive and elegant atmosphere—and most importantly, to allow the
          bride to truly stand out on this special day.
        </p>
        <p>
          Your adherence to this dress code means the world to us and will make
          our celebration even more meaningful.
        </p>
      </>
    ),
  },
  {
    question: "Attire Guidelines",
    answer: (
      <>
        <div className="guideline-section">
          <h4>For Men</h4>
          <ul className="kos">
            <li>
              <strong>Suit:</strong> Black tailored suit or tuxedo.
            </li>
            <li>
              <strong>Shirt:</strong> Crisp white or black dress shirt.
            </li>
            <li>
              <strong>Tie:</strong> Neutral-toned (black, gray, or silver).
            </li>
            <li>
              <strong>Shoes:</strong> Polished black dress shoes.
            </li>
          </ul>
        </div>

        <div className="guideline-section">
          <h4>For Women</h4>
          <p>
            <strong>Options:</strong>
          </p>
          <ul className="kos">
            <li>Floor-length black gown.</li>
            <li>Elegant cocktail dress (midi or knee-length).</li>
            <li>Dressy pantsuit or jumpsuit.</li>
          </ul>
          <p>
            <strong>Details:</strong> Patterns or textures (lace, sequins, etc.)
            are welcome as long as the primary color is black.
          </p>
          <p>
            <strong>Shoes:</strong> Heels, flats, or dressy sandals in black or
            metallic tones.
          </p>
        </div>
      </>
    ),
  },
  {
    question: "Examples for Inspiration",
    answer: (
      <div>
        <p>Click to view example outfit inspirations:</p>
        <ul className="kos">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              Outfit Inspiration #1
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              Outfit Inspiration #2
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              Outfit Inspiration #3
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];


  return (
    <div className="faq_container">
      <div className="faq_cover mallika">
        <h2 className="faq_title" style={{ color: "#fff" }}>
          Dress Code: All Black Formal Attire
        </h2>
      </div>

      <div className="faq_card_section">
        {dressCodeSections.map((section, index) => (
          <div className="faq_sub_card" key={index}>
            <div className="faq_top" onClick={() => toggleAccordion(index)}>
              <div className="faq_top_t">
                <h2 className="faq_qs">{section.question}</h2>
              </div>
              <div className="faq_top_t">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            <div className="line"></div>
            {activeIndex === index && (
              <div className="faq_ans">
                <div className="faq_ans_p">{section.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DressCode;
