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

import './App.css'

function App () {
  return (
    <div>
    <h1> Calculator</h1>
    <table >

      {/*first row*/}

     <tr>
      <td colSpan={4}> RESULTADO</td>
  
        </tr>  

      {/*Second row*/}

     <tr>
        <td >
          <button 
          type='button' className="btn btn-primary"> C </button> 
          </td>
          
        <td >
          <button 
        type='button' className="btn btn-primary"> / </button>
         </td>

        <td >
         <button 
        type='button' className="btn btn-primary"> * </button>
         </td>
         
        <td >
         <button 
        type='button' className="btn btn-primary"> - </button>
         </td>

        </tr>  

      {/*third row*/}


     <tr>
      <td >
        <button 
        type='button' className="btn btn-primary"> 7 </button>
         </td>
         <td >
        <button 
        type='button' className="btn btn-primary"> 8 </button>
         </td>
         <td >
        <button 
        type='button' className="btn btn-primary"> 9 </button>
         </td>

        <td rowSpan={2}>  <button 
        type='button' className="btn btn-primary"> + </button> </td>
        </tr>  

        {/*Fourth row*/}
      <tr>
      <td >
        <button 
        type='button' className="btn btn-primary"> 4 </button>
         </td>
         <td >
        <button 
        type='button' className="btn btn-primary"> 5 </button>
         </td>
         <td >
        <button 
        type='button' className="btn btn-primary"> 6 </button>
         </td>
 
        </tr>  


        {/*Fifth row*/}


      <tr>
      <td >
        <button 
        type='button' className="btn btn-primary"> 1 </button>
         </td>
         <td >
        <button 
        type='button' className="btn btn-primary"> 2 </button>
         </td>
         <td >
        <button 
        type='button' className="btn btn-primary"> 3 </button>
         </td>

        <td rowSpan={2}> <button 
        type='button' className="btn btn-primary"> = </button> </td>
        </tr>  

        {/*sixth row*/}

      <tr>
        <td colSpan={2}><button 
        type='button' className="btn btn-primary"> 0 </button> </td>
        <td >
        <button 
        type='button' className="btn btn-primary"> . </button>
         </td>
      
        
        </tr>  

    

        

           
         
    </table>
    </div>
  )
}

export default App