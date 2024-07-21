import React from "react";
import data from "../assets/experience.json";

const Timeline = () => {
  return (
    
    <div id="timeline">
    <h1 className="eTitle">Experience</h1>
      <div className="timelineBox">
        {data.experience.map((item, index) => (
          <TimelineItem
            heading={item.title}
            role={item.role}
            duration={item.duration}
            description={item.description}
            technologies={item.technologies}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, role,duration, description,technologies, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h1>{heading}</h1>
      <br />
      <h3>{role}</h3>
      <br />
      <h4>{duration}</h4>
      <br />
      <p>{description}</p>
      <br />
      <p>{technologies}</p>
    </div>
  </div>
);

export default Timeline;