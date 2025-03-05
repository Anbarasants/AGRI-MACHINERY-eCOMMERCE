import React from "react";
import { Link } from "react-router-dom";

// Dummy services data
const services = [
  { id: 1, name: "Tractor Repair", description: "We offer professional tractor repair services." },
  { id: 2, name: "Harvester Maintenance", description: "Keep your harvester in top condition with regular maintenance." },
  { id: 3, name: "Plough Installation", description: "Get your plough installed by expert technicians." },
  { id: 4, name: "Sprayer Calibration", description: "Ensure accurate spraying with our calibration services." },
];

const Services = () => {
  return (
    <div className="container mx-auto p-6 mt-15">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
            <Link
              to="/service-request"
              className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              Request Service
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
