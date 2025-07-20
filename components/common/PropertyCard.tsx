import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden border">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-500">${property.price} / night</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
