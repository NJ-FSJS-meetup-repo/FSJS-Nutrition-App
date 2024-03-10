// components/Card.js
const Card = ({ children, additionalClasses = '' }) => (
    <div className={`card shadow ${additionalClasses}`}>{children}</div>
  );  
  export default Card;