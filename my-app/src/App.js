import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import CardComponent from './Component/CardComponent';
import Friends from './Component/Friends';
function App() {
  const propObj={
            Year:2022,
            Course:"MSc"
           }
  const frnd={
            name1:"Snehal",
            name2:"Sandhya",
            name3:"Mayuri",
            name4:"Komal"
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
      <div>
          <Friends frnd={frnd}/>
      </div>
    </div>
  );
}

export default App;

   