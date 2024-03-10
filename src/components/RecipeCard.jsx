// components/RecipeCard.jsx
const RecipeCard = ({ title, duration, calories, imageUrl }) => (
  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
    <img className="rounded-t-lg" src={imageUrl} alt={`${title}, ${duration} - ${calories} cal`} />
    <div className="p-5">
      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
      <p className="font-normal text-gray-700 mb-3">{`${duration} - ${calories} cal`}</p>
    </div>
  </div>
);

export default RecipeCard;
