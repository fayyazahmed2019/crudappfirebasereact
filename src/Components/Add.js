import React, {useState, useEffect} from 'react'
import Header from './Main/Header';
import Footer from './Main/Footer'
import {useHistory,useLocation} from "react-router-dom";
import fire from './Config/Config';


const Add=()=>{



const history = useHistory()
    
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const Adds=()=>{
    
      
        fire.database().ref('/contact').push({email, password})
    
        alert("Sent")
        
     history.push('/')
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
      
            history.push('/Add')
            
          
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
<Header />

<div className='Heading'><h1>Add</h1>

</div>



<div className='MainDiva'>


<div className="l-form">
            <form action="" className="form">
                <h1 className="form__title">Add</h1>

                <div className="form__div">
                    <input type="text" className="form__input" placeholder=" "   onChange={getemail} />
                    <label className="form__label">Name</label>
                </div>

                <div className="form__div">
                    <input type="password" className="form__input" placeholder=" " onChange={getpassword} />
                    <label  className="form__label">Mobile</label>
                </div>

                <input type="button" className="form__button" value="Add" onClick={Adds} />
            </form>
        </div>




     


</div>
<Footer />
</>


)

}

export default Add;
