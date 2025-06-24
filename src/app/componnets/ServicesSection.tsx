// components/ServicesSection.tsx
import React, { JSX } from 'react';
import { Monitor, Code2, Server, Database, Smartphone, Shield } from 'lucide-react';
interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}
const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Monitor className="service-icon" />,
      title: 'Web Hosting',
      description: 'We provide web hosting in reasonable price along with easy online Domain Registration Services.'
    },
    {
      icon: <Code2 className="service-icon" />,
      title: 'Web Development',
      description: 'Web Designing and Development with modern features before delivering final product.'
    },
    {
      icon: <Server className="service-icon" />,
      title: 'Server Management',
      description: 'Professional server setup and maintenance services.'
    }
  ];
  return (
    <section className="section-services section" id="service-section">
      <div className="container">
        <h2 className="common-heading">Service Offers</h2>
        <p>
          Personal contribution is not enough to start and complete any custom project from scratch to live. I have a dedicated
          team to provide the services included below. 
        </p>
      </div>
      <div className="container grid grid-three-col">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;