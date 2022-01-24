import Card from "../Card";

function Button({ children, onClick }) {
  switch (children) {
    case "increment":
      return (
        <>
          <a href="#" className="btn btn-success" onClick={onClick}>
            Increment Number
          </a>
        </>
      );

    case "decrement":
      return (
        <>
          <a href="#" className="btn btn-danger" onClick={onClick}>
            Decrement Number
          </a>
        </>
      );

    default:
      alert(`Trying to access invalid component [${{ Children }}]`);
  }
}

export default Button;
