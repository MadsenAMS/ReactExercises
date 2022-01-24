import Item from "./component/Item";
import Card from "./component/Card";

function App() {
    return ( 
        <>
            
          <h1>Primeiros Testes com o React</h1> 
          <p>Aqui começa o exercíco!</p>
          <div>
            <ul className="list-group">
              <Item>{1}</Item>
              <Item>{2}</Item>
               <Item>{3}</Item>
              <Item>{4}</Item>
              <Item>{5}</Item>
            </ul>
          </div>

          <br/>

          <Card/>

        </>

    );
}

export default App;