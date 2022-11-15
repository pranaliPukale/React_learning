import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import CardComponent from './Component/CardComponent';
function App() {
  const propObj={
            Year:2022,
            Course:"MSc"
           }
  return (
    
    <div className="App">
      <div><HeaderComponent /></div>
      <div>
         <CardComponent 
            propList={{collegeName:"Sangola College  Sangola",
                        university:'Solapur'}}
            simpleProp={"Native Place:Pandharpur"}  
            propObj={propObj}          
          />
      </div>
    </div>
  );
}

export default App;

   