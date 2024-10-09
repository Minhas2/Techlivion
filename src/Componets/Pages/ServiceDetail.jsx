import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetail.css";

export default function ServiceDetail() {

  const navigate = useNavigate();
  const { slug } = useParams();

  const serviceData = [
    {
      id: 1,
      image: "s1.png",
      heading: "Front-End Web Development",
      slug: "front-end",
      para: "Get the front-end portion of websites and web applications built according to your requirements from our professional team. It's the part that users see and interact with, making it your business's face. The best-suited technology is used according to the project or as per the client's requirement.",
    },
    {
      id: 2,
      image: "s2.png",
      heading: "Back-End Web Development",
      slug: "back-end",
      para: "Power your web applications with a robust backend, handling server-side logic and databases. Our back-end web development services ensure your apps run smoothly, with secure and efficient data handling, API integrations, and more.",
    },
    {
      id: 3,
      image: "s3.png",
      heading: "Mobile App Development",
      slug: "mobile-app",
      para: "Develop high-performance mobile applications for Android and iOS platforms, tailored to your business needs. From native apps to cross-platform solutions, we ensure smooth user experiences and cutting-edge functionality.",
    },
    {
      id: 4,
      image: "s4.png",
      heading: "API Development",
      slug: "api-development",
      para: "Streamline your business operations with custom API development. Our API solutions ensure smooth integration between various systems, enabling seamless communication between your applications and third-party services.",
    },
    {
      id: 5,
      image: "s5.png",
      heading: "Web Application Development",
      slug: "web-app",
      para: "Build dynamic web applications that scale with your business needs. Our team develops secure, efficient, and feature-rich web apps that enhance user engagement and meet your business objectives.",
    },
    {
      id: 6,
      image: "s6.png",
      heading: "UI/UX Design",
      slug: "ui-ux",
      para: "Deliver an exceptional user experience with our UI/UX design services. We create visually stunning and highly intuitive designs that ensure user satisfaction and boost engagement across digital platforms.",
    },
    {
      id: 7,
      image: "s1.png",
      heading: "2D Game Development",
      slug: "2d-game",
      para: "Create engaging 2D games with our expert development team. We handle everything from design to deployment, delivering games that captivate players with immersive visuals and smooth gameplay.",
    },
    {
      id: 8,
      image: "s1.png",
      heading: "3D Game Development",
      slug: "3d-game",
      para: "Bring your game ideas to life with our advanced 3D game development services. We specialize in creating stunning 3D environments and characters, along with immersive gameplay experiences.",
    },
    {
      id: 9,
      image: "s1.png",
      heading: "SEO Services",
      slug: "seo",
      para: "Enhance your website's visibility and drive organic traffic with our tailored SEO services. We optimize your website's on-page and off-page SEO, ensuring higher search engine rankings and increased conversions.",
    },
    {
      id: 10,
      image: "s1.png",
      heading: "Graphic Design",
      slug: "graphic-design",
      para: "Transform your ideas into stunning visuals with our professional graphic design services. From logos to full branding suites, we craft designs that make a lasting impression and enhance your brand identity.",
    }
  ];
  

  // Find the service data that matches the param id
  const service = serviceData.find((service) => service.slug === slug);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <>
      <div className="service-detail epilogue">
        <div className="bg-ser">
          <div className="container text-white py-ServiceDetail">
            <p className="text-center">
              <img
                src={`../assets/service-img/${service.image}`}
                alt={service.heading}
                className="service-image"
              />
            </p>
            <div className="row mt-5">
              <div className="col-12">
                <h2 className="text-center">{service.heading}</h2>
                <p>{service.para}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
