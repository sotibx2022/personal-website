// components/DeveloperServices.tsx
import React from 'react';
import { 
  Monitor,
  Code,
  Camera,
  Image,
  Smartphone,
  Palette 
} from 'lucide-react';

const DeveloperServices: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="service-icon" size={32} />,
      title: 'Web Design',
      description: '“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”'
    },
    {
      icon: <Code className="service-icon" size={32} />,
      title: 'Web Development',
      description: '“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”'
    },
    {
      icon: <Camera className="service-icon" size={32} />,
      title: 'Photography',
      description: '“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”'
    },
    {
      icon: <Image className="service-icon" size={32} />,
      title: 'Clipping Path',
      description: '“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”'
    },
    {
      icon: <Smartphone className="service-icon" size={32} />,
      title: 'Apps Interface',
      description: '“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”'
    },
    {
      icon: <Palette className="service-icon" size={32} />,
      title: 'Graphic Design',
      description: '“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”'
    }
  ];

  return (
    <section className="section-services section section--hidden">
      <div className="container">
        <h2 className="common-heading">Service Offers</h2>
        <p className="text-center max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex
          dolores tempore possimus, mollitia vero quas
        </p>
      </div>

      <div className="container grid grid-three-col">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeveloperServices;