import { useState } from "react";
import people from "./data";
import Review from "./Components/Review";
const App = () => {
  const [reviews, setReviews] = useState(people);
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const nextReview = () => {
    if (index === reviews.length - 1) {
      return;
    }
    setIndex((prevValue) => {
      return prevValue + 1;
    });
  };
  const prevReview = () => {
    if (index === 0) {
      return;
    }
    setIndex((prevValue) => {
      return prevValue - 1;
    });
  };
  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber);
  };

  return (
    <main>
      <Review
        id={id}
        name={name}
        job={job}
        image={image}
        text={text}
        prevReview={prevReview}
        nextReview={nextReview}
        randomReview={randomReview}
      />
    </main>
  );
};
export default App;
