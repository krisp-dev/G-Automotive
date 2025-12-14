import heroImage from "../../assets/hero.jpg";
import "./Hero.scss";
import Button from "../Button/Button";

function Hero() {
   return (
      <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
         <h1 className="hero__title">Welcome to G Automotive</h1>
         <p className="hero__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            ornare ipsum. Praesent nec tellus nec libero convallis dapibus.
            Mauris pellentesque bibendum lorem, eget eleifend justo condimentum
            non. Sed hendrerit, orci volutpat blandit varius, diam dui pretium
            dui, ut convallis sapien felis ut quam. Phasellus facilisis ante sed
            nibh dapibus commodo.
         </p>
         <Button>Contact Us</Button>
      </header>
   );
}

export default Hero;
