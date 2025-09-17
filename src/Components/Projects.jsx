import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "../Styling/Projects.css";

function Projects() {
  const data = [
    {
      url: "https://b-lu-jdru1umss-leozaddas-projects.vercel.app/",
      title: "SwoleMate",
      description: "Helps bodybuilders track workouts, log lifts, and see results.",
    },
    {
      url: "https://b-l-u-e.vercel.app/",
      title: "Momentum",
      description: "Simple app for trainers and clients to track progress without messy notes.",
    },
    {
      url: "https://analytics-project-pgu3.vercel.app/",
      title: "DETHINK DECAF",
      description: "Shows how visitors use your site so you can convert more people into paying clients.",
    },
    {
      url: "https://nutrition-app-flame.vercel.app/",
      title: "Forkgiveness",
      description: "A landing page for a nutrition coach that brings in new clients every week.",
    },
  ];

  return (
    <div className="projects-list">
      <div className="project-header">
        <h1>What we’ve built</h1>
        <p>From big clients to our own side projects.</p>
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className="project-entry">
            <a href={item.url} className="project-link">
              <h3 className="project-title">
                {item.title} <ArrowUpRight />
              </h3>
              <p className="project-description">{item.description}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
