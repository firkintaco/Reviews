import React from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";

const Review = ({
  id,
  image,
  name,
  job,
  text,
  prevReview,
  nextReview,
  randomReview,
}) => {
  return (
    <section className="review" key={id}>
      <div className="img-container">
        <img src={image} className="person-img" alt={name} />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h3 className="author">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" type="button" onClick={prevReview}>
          <FaArrowLeft />
        </button>
        <button className="next-btn" type="button" onClick={nextReview}>
          <FaArrowRight />
        </button>
      </div>
      <button type="button" className="btn btn-hipster" onClick={randomReview}>
        Surprise me
      </button>
    </section>
  );
};

export default Review;
