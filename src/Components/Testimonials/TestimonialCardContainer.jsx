import TestimonialCard from "./TestimonialCard";
const TestimonialCardContainer = (props) => (
  <div className="cards-container">
    {props.cards.map((card) => (
      <TestimonialCard title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </div>
);

export default TestimonialCardContainer;
