import React, { useState } from "react";
import "./ServicesGD.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ServicesGD() {
  const [openIndex, setOpenIndex] = useState(null); // Track which section is open

  // Toggle function to expand/collapse the section
  const toggleCollapse = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

  const servicesData = [
    {
      title: "Marketing",
      icon: faEnvelope,
      services: [
        "Front-End Web Development",
        "Back-End Web Development",
        "Mobile App Development",
        "UI/UX Design",
      ],
    },
    {
      title: "Design",
      icon: faEnvelope, // You can replace the icon for each section
      services: ["SEO", "Social Media Marketing", "Content Marketing"],
    },
    {
      title: "Cloud Services",
      icon: faEnvelope,
      services: ["AWS", "Azure", "Google Cloud"],
    },
    {
        title: "UI/UX",
        icon: faEnvelope,
        services: ["AWS", "Azure", "Google Cloud"],
      },
      {
        title: "SEO",
        icon: faEnvelope,
        services: ["AWS", "Azure", "Google Cloud"],
      },
      {
        title: "Human Resource Management",
        icon: faEnvelope,
        services: ["AWS", "Azure", "Google Cloud"],
      },
      {
        title: "3D Product Visualization",
        icon: faEnvelope,
        services: ["AWS", "Azure", "Google Cloud"],
      },
  ];

  return (
    <div className="container epilogue py-5">
      <div className="row mb-3">
        {servicesData.map((section, index) => (
          <div className="col-lg-6" key={index}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center align-items-center">
                <span className="circle-icon d-flex align-items-center">
                  <FontAwesomeIcon icon={section.icon} />
                </span>
                <h1 className="ps-2 mb-0 question-heading">{section.title}</h1>
              </div>

              {/* Toggle Button */}
              <div>
                <img
                  src="../assets/down.png"
                  alt="Toggle Content"
                  className="toggle-btn"
                  onClick={() => toggleCollapse(index)}
                  style={{
                    cursor: "pointer",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0)",
                  }}
                />
              </div>
            </div>

            {/* Collapsible content */}
            <div className={`collapse ${openIndex === index ? "show" : ""}`}>
              <div className="mt-3 p-3 border-expand">
                <div className="d-flex flex-wrap">
                  {section.services.map((service, serviceIndex) => (
                    <div className="border-tag mt-2 me-2" key={serviceIndex}>
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="questionBotBorder my-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
