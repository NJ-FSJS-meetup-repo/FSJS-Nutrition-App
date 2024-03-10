// components/NutritionPlanCard.js
const NutritionPlanCard = ({ planName, imageUrl }) => (
    <div className="card shadow">
      <img src={imageUrl} alt={planName} className="mb-2" />
      <span className="text-sm">{planName}</span>
    </div>
  );
  
    export default NutritionPlanCard;