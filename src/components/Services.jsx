import ServiceCard from './ServiceCard';
import  { useState } from 'react';


function Services() {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
        id: 1,
        name: 'Plumbing',
        description: 'Professional plumbing services for residential and commercial needs',
        imageUrl: '/images/plumbing.png',
    },
    {
        id: 2,
        name: 'Electrical',
        description: 'Expert electrical services for installations, repairs, and maintenance',
        imageUrl: '/images/electrical.png',
    },
    {
        id: 3,
        name: 'Cleaning',
        description: 'Reliable cleaning services for homes and offices',
        imageUrl: '/images/cleaning.png',
    },
    {
        id: 4,
        name: 'Carpentry',
        description: 'Skilled carpentry services for custom furniture and repairs',
        imageUrl: '/images/carpentry.png',
    },
    {
        id: 5,
        name: 'Landscaping',
        description: 'Professional landscaping services for beautiful outdoor spaces',
        imageUrl: '/images/landscaping.png',
    },
    {
        id: 6,
        name: 'Painting',
        description: 'Expert painting services for interior and exterior projects',
        imageUrl: '/images/painting.png',
    },
  ];
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="container py-5">
        <h2 className="text-center text-dark fw-bold mb-5">Services</h2>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
        <div className="row">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
    </section>
  );
}

export default Services;