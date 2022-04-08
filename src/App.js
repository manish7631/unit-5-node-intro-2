import imgtag from  "./image/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
import './App.css';

function App() {
  const section = ["Services", "Projects", "About"];
  const btn = "contact";
  return (
    <div className="App">
       <div id='navbar'>
         <div className='logo'>
         <img src={imgtag} alt=""/>
           </div>
         <div className='section'>
           <ul>
             {section.map((e) => {
               return <li>{e}</li>
             })}
           </ul>
         </div>
         <div className='btn'>{btn}</div>
       </div>
    </div>
  );
}

export default App;
