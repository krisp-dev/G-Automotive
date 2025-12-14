import "./Card.scss";
import Button from "../Button/Button";

function CardImage({ src, alt }) {
   return (
      <div className="card__image">
         <img src={src} alt={alt} />
      </div>
   );
}

function CardHeader({ title }) {
   return <h3 className="card__title">{title}</h3>;
}

function CardBody({ children }) {
   return <div className="card__body">{children}</div>;
}

function Card({
   image,
   title,
   buttonLabel,
   isActive = false,
   onButtonClick,
   children,
}) {
   return (
      <article className={`card ${isActive ? "card--active" : ""}`}>
         <CardImage src={image} alt={title} />

         <div className="card__content">
            <CardHeader title={title} />

            <CardBody>{children}</CardBody>

            <div className="card__actions">
               <Button onClick={onButtonClick}>{buttonLabel}</Button>
            </div>
         </div>
      </article>
   );
}

export default Card;
