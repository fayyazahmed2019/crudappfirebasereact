import React, {useState, useEffect} from 'react'
import fire from '../Config/Config';
import {useHistory,useLocation} from "react-router-dom";


const Login=()=>{


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory()

    const loginc=()=>{

      

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
      
          let user = userCredential.user;
          // ...
          console.log("user success")
          console.log(user)
          alert("successfully signed")
          

            
        history.push('/Welcome')
      
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
              console.log(errorMessage);
              alert(errorMessage);
        });
      
      }
    

      const getemail=(e)=>{
        setEmail(e.target.value)
        
        console.log(e.target.value)
      }
   
      const getpassword=(v)=>{
        setPassword(v.target.value)
        
        console.log(v.target.value)
      }

      
      const checksignin=()=>{
        fire.auth().onAuthStateChanged((user) => {
          if (user) {

            let uid = user.uid;
            console.log(user.email)
      
            history.push('/Welcome')
            
          
            // ...
          } else {
            // User is signed out
            // ...
            history.push('/')
          }
        });
      
      }

      useEffect(() =>{
       
        checksignin()
        
        },[]);

    
return(

<>

<div className="l-form">
            <form action="" className="form">
                <h1 className="form__title">Sign In</h1>

                <div className="form__div">
                    <input type="text" className="form__input" placeholder=" "   onChange={getemail} />
                    <label className="form__label">Username</label>
                </div>

                <div className="form__div">
                    <input type="password" className="form__input" placeholder=" " onChange={getpassword} />
                    <label  className="form__label">Password</label>
                </div>

                <input type="button" className="form__button" value="Sign In" onClick={loginc} />
            </form>
        </div>
        
</>


)
}

export default Login;

