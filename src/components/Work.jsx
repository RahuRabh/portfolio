import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { workData } from "../assets/data.js";

const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {workData.map((work, index) => (
              <div key={index} className="workItem">
                <img src={work.imgSrc} alt={work.title} />
                <aside>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <a target={"blank"} href={work.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
