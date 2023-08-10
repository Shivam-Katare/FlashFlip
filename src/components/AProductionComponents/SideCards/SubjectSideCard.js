import React, { useState, useEffect } from "react";
import "./SubjectSideCard.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tilt from 'react-parallax-tilt';

const CustomSlider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500, // Set the slide change duration here
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay duration here
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  return (
    <Slider {...settings}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={slideVariants}
          initial={index === currentIndex ? "animate" : "initial"}
          animate={index === currentIndex ? "animate" : "initial"}
          exit="exit"
        >
          {child}
        </motion.div>
      ))}
    </Slider>
  );
};


function ClashCard({ imageSrc, level, name, description, training, speed, cost }) {
  return (
    <div className={`clash-card ${name.toLowerCase()}`}>
      <div className={`clash-card__image clash-card__image--${name.toLowerCase()}`}>
        <img src={imageSrc} alt={name} style={{width: "13rem"}} />
      </div>
      <div className={`clash-card__level clash-card__level--${name.toLowerCase()}`}>{level}</div>
      <div className="clash-card__unit-name">{name}</div>
      <div className="clash-card__unit-description">{description}</div>
    </div>
  );
}

function SubjectSideCard() {
  return (
    <div className="slide-container">

<Tilt
    perspective={500}
    scale={1.02}
  >
<CustomSlider>
  
      <div className="wrapper">
        <ClashCard
          imageSrc="https://64.media.tumblr.com/2e4ce32a808026477674c1d7486339bc/tumblr_inline_phjlrfV6Zl1rh0t8d_500.png"
          level="Level 4"
          name="HTML"
          description="Want to learn HTML? Master the art of creating web pages with HTML."
        />
      </div>

      <div className="wrapper">
        <ClashCard
          imageSrc="https://www.freepnglogos.com/uploads/javascript-png/javascript-icon-js-code-logo-javascript-png-logo-download-9.png"
          level="Level 5"
          name="JavaScript"
          description="Want to master JS interview problems? Hone your JS skills with problem-solving."
        />
      </div>

      <div className="wrapper">
        <ClashCard
          imageSrc="https://icon-library.com/images/react-icon/react-icon-0.jpg"
          level="Level 5"
          name="React"
          description="Want to build interactive UIs? Dive deep into React to create dynamic apps."
        />
      </div>

      <div className="wrapper">
        <ClashCard
          imageSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png"
          level="Level 5"
          name="CSS"
          description="Want to style web pages? Master CSS to create beautiful designs."
        />
      </div>

      <div className="wrapper">
        <ClashCard
          imageSrc="https://pluspng.com/img-png/python-logo-png-open-2000.png"
          level="Level 6"
          name="Python"
          description="The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!"
        />
      </div>
</CustomSlider>
</Tilt>
    </div>
  );
}

export default SubjectSideCard;
