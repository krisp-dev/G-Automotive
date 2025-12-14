import { useState } from "react";
import Card from "./Card";
import cardImage from "../../assets/brisbane.jpg";
import "./Cards.scss";

function Cards() {
   const cardsData = [
      {
         id: 1,
         title: "Heading 1",
         image: cardImage,
         buttonLabel: "Button 1",
         paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         ],
      },
      {
         id: 2,
         title: "Heading 2",
         image: cardImage,
         buttonLabel: "Button 2",
         paragraphs: [
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         ],
      },
      {
         id: 3,
         title: "Heading 3",
         image: cardImage,
         buttonLabel: "Button 3",
         paragraphs: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem repudiandae animi quos inventore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum molestias accusamus vitae architecto alias.",
         ],
      },
   ];

   const [activeCardId, setActiveCardId] = useState(2);

   return (
      <section className="cards">
         <div className="cards__container">
            <div className="cards__grid">
               {cardsData.map((card) => {
                  console.log(card.id, activeCardId);

                  return (
                     <Card
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        buttonLabel={card.buttonLabel}
                        isActive={activeCardId === card.id}
                        onButtonClick={() => setActiveCardId(card.id)}
                     >
                        {card.paragraphs.map((paragraph, index) => (
                           <p
                              className="card__text"
                              key={`${card.id}--p-${index}`}
                           >
                              {paragraph}
                           </p>
                        ))}
                     </Card>
                  );
               })}
            </div>
         </div>
      </section>
   );
}

export default Cards;
