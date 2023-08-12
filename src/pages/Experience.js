import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            La Blossoms School
          </h3>
          <p>Secondary Education (Grade 12th)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Algonquin College</h3>

          <h4 className="vertical-timeline-element-subtitle">
            College diploma
          </h4>

          <p>Computer Programming (Computer Science)</p>
          <p>
            <b>Relevant Courses: </b>Technical Mathematics for Computer Science,
            Operating System Fundamentals (GNU/Linux), Mobile Graphical
            Interface Programming, Network Programming, Object Oriented
            Programming with Design Patterns, Business Intelligence and Data
            Analytics, Enterprise Application Programming and Advanced Database.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Back End Engineer - KnowQuest
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            May 2023 - August 2023
          </h4>
          <p>
            <p>
              As a Backend Developer at The Big leaf, I spearhead the end-to-end
              development process of web applications, from conceptualization to
              deployment, ensuring optimal functionality and usability.
            </p>
            <p>
              I employ a range of technologies, including front-end framework
              (such as React), back-end technologies (like Node.js), databases
              (MySQL and MongoDB) and AWS technologies to create robust,
              scalable, and responsive applications.
            </p>
            <p>
              I work closely with the Quality Assurance team to ensure the
              delivery of bug-free and high-quality software, contributing to
              the seamless functioning of our applications and platforms.
            </p>
            <p>
              Additionally, I conduct thorough code reviews and participate
              actively in design discussions, ensuring adherence to best
              practices, coding standards, and industry guidelines.
            </p>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
