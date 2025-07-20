import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, imageSrc, description }) => (
  <div className="border rounded shadow-md p-4">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-2 rounded" />
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
