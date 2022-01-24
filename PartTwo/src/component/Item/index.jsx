const Item = ({ children }) => {
  switch (children) {
    case 1:
      return (
        <li className="list-group-item list-group-item-dark">
          Feito no segundo curso de react DIO (Trabalhando com Componentes
          React)
        </li>
      );

    case 2:
      return (
        <li className="list-group-item list-group-item-dark">
          Construída com npx create-react-app 'nome da aplicação'
        </li>
      );

    case 3:
      return (
        <li className="list-group-item list-group-item-dark">
          Adicionado Bootstrap (CSS).
        </li>
      );

    case 4:
      return (
        <li className="list-group-item list-group-item-dark">
          Adicionado Bundle.
        </li>
      );

    case 5:
      return (
        <li className="list-group-item list-group-item-dark">
          Cada item dessa lista foi criado e adicionado como um componente
          avulso.
        </li>
      );

    default:
      alert(`Trying to access invalid content [${props.children}]!`);
      break;
  }
};

export default Item;
