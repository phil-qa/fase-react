import "../styles/card.css";

const Card = ({ name, age, role }) => {
  return (
    <div className="card">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.credly.com%2Fsize%2F340x340%2Fimages%2F7d34904f-550c-4114-baae-64903716fb98%2Fblob.png&f=1&nofb=1&ipt=24eaa32f9b62305c7c7ce0523ad32246d006b1bae0f4284161e3d9ec6413753a&ipo=images"
        alt="QA Logo"
        width="100px"
      />
      <div className="card-content">
        <h1>This entry was from {name}</h1>
        <div className="card-details">
          <h2>Age : {age}</h2>
          <h2>Role : {role}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
