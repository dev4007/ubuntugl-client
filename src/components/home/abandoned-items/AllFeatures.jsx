import React from "react";
import fastDelivery from "../../../assets/features/fast-delivery.png";
import creditCard from "../../../assets/features/credit-card.png";
import headphones from "../../../assets/features/headphones.png";
import shield from "../../../assets/features/shield.png";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center">
        <img src={icon} alt="" />
      </div>
      <h3 className="mt-3 text-base font-medium">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};

const AllFeatures = () => {
  const features = [
    {
      icon: fastDelivery,
      title: "Free Shipping",
      description: "Free Shipping for orders over $200",
    },
    {
      icon: shield,
      title: "Money-Back Guarantee",
      description: "Membership fee refunded within 90 days",
    },
    {
      icon: headphones,
      title: "Online Support",
      description: "24 hours a day, 7 days a week",
    },
    {
      icon: creditCard,
      title: "Flexible Payment",
      description: "Pay with Multiple Credit Cards",
    },
  ];

  return (
    <div className="bg-white mt-10 py-6 px-24 max-lg:px-10 max-md:px-0">
      <div className="grid md:grid-cols-4 max-md:grid-cols-4 max-sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllFeatures;
