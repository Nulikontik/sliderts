import React, { useEffect, useState } from "react";
import data, { IPeople } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const App = () => {
  const [people, setPeople] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, people]);

  useEffect(() => {
    let slider = setInterval(
      () => setCurrentIndex((prevState) => prevState + 1),
      5000
    );
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>$</span>Forbes
        </h2>
      </div>
      <div className="section-center">
        {people.map((person: IPeople, personIndex: number) => {
          const { id, vid, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === currentIndex) {
            position = "activeSlide";
          }

          if (
            personIndex === currentIndex - 1 ||
            (currentIndex === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>
                №{id} {name}
              </h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p> <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button
          className="prev"
          onClick={() => setCurrentIndex((prevState) => prevState - 1)}
        >
          <FiChevronsLeft />
        </button>

        <button
          className="next"
          onClick={() => setCurrentIndex((prevState) => prevState + 1)}
        >
          <FiChevronsRight />
        </button>
      </div>
    </section>
  );
};

export default App;
