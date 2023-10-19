import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-60 rounded-xl bg-clip-border">
        <img src={brand.image} alt="profile-picture" className="h-full w-full"/>
      </div>
      <div className="p-6 text-center">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {brand.name}
        </h4>
        
      </div>
      
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
