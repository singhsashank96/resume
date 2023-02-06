import React from 'react'
import { Link ,Route,Routes} from 'react-router-dom'
import Login from './Login'
import LoginPage from './LoginPage'
import Login1 from './Login'
function Home() {
  return (
    <div>
     
  
       <div className='container'>
      <img className='imgreact' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
      <p className='text'>   SOME RANDOM TEXT,SOME RANDOM <br /> TEXT , SOME RANDOM TEXT,SOME RANDOM TEXT </p>
      <div className='login'>
  
        <div className='loginbtns'>
       
        <div  className='active' >
        <button className='btn2' ><Link to='/'>Login</Link> </button>
          </div>
          <div className='active1'>
          <button className='btn2' ><Link to="/Loginpage">Registretion</Link></button>
          </div>
          </div>
         
       <div >
       <input  placeholder='Email Address' type='email' id='email' className='inputs'></input>
       <br />
       <input  placeholder='Password' type='password' id='pass' className='inputs'></input>
       <br />
       <button className='inputs1'>LOGIN</button>
        <br />
         {/* <span  className="fpass" >Forget password?</span>*/}
         
          <div>
         <br/>

         
       
        
          
          <p   className='LowerText'>Don't have an account?<span className='LowerTextCol'>Create new one!</span></p>
          <br />
          <p className='LowerText'>by singning up, you agree with our <span  className='LowerTextCol1'> Terms & Conditions</span></p>
         </div>
        
      </div>
       </div>
      
    </div>
    </div>
  )
}

export default Home
