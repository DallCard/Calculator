/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}*/

import { useState } from 'react'
import './App.css'

const buttonsClasses = "btn btn-primary w-75";

function App () {

const [screen, setScreen] = useState('0') 

const handleButtonClick = () => {
  if (screen === '0'){
    
    setScreen(9)

  }else{
    setScreen(`${screen}9`) 

  } 
}






  return (
    <div className='app'>
    <h1 > Calculator</h1>
    <table >

      {/*first row*/}

     <tr>
      <td colSpan={4} style={{
        border:"1px solid black",
        textAlign: "end"}}> 
      <h2>{screen}</h2>
      
      </td>
      
      </tr>  
      {/*Second row*/}
     <tr>
        <td >
          <button 
          type='button'
          className={buttonsClasses}> C </button> 
          </td>
          
        <td >
          <button 
        type='button' 
        className={buttonsClasses}> / </button>
         </td>

        <td >
         <button 
        type='button' 
        className={buttonsClasses}> * </button>
         </td>
         
        <td >
         <button 
        type='button' 
        className={buttonsClasses}
        > - </button>
         </td>

        </tr>  

      {/*third row*/}


     <tr>
      <td >
        <button 
        type="button"
        className={buttonsClasses}
        > 7 </button>
         </td>


         <td >
        <button 
        type="button" 
        className={buttonsClasses}
        > 8 </button>
         </td>


         <td >
        <button 
        type="button" 
        className={buttonsClasses}
        onClick={handleButtonClick}
        > 9 </button>
         </td>

        <td rowSpan={2}>  
        <button 
        type='button' 
        className={buttonsClasses}
        style={{height: "80px"}} 
        > + </button> </td>
        </tr>  

        {/*Fourth row*/}
      <tr>
      <td >
        <button 
        type='button' className={buttonsClasses}> 4 </button>
         </td>
         <td >
        <button 
        type='button' className={buttonsClasses}> 5 </button>
         </td>
         <td >
        <button 
        type='button' className={buttonsClasses}> 6 </button>
         </td>
 
        </tr>  


        {/*Fifth row*/}


      <tr>
      <td >
        <button 
        type='button' className={buttonsClasses}> 1 </button>
         </td>
         <td >
        <button 
        type='button' className={buttonsClasses}> 2 </button>
         </td>
         <td >
        <button 
        type='button' className={buttonsClasses}> 3 </button>
         </td>

        <td rowSpan={2}> <button 
        type='button' className={buttonsClasses} 
        style={{height: "80px"}}
        > = </button> </td>
        </tr>  

        {/*sixth row*/}
        <tr>
        <td> <button 
        type='button' className={buttonsClasses}> DEL </button> 
        </td>

        <td >  <button 
        type='button' 
        className={buttonsClasses}
        > 0 </button> </td>

        <td >
        <button 
        type='button' className={buttonsClasses}> . </button>
         </td>
      
        
        </tr>   
         
    </table>
    </div>
  )
}

export default App
