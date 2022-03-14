import React, {useState, useEffect} from 'react'
import Header from '../Main/Header'
import Footer from '../Main/Footer'
import {useHistory,useLocation} from "react-router-dom";
import fire from '../Config/Config';


const Welcome=()=>{

    const history = useHistory()
    
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

      
      const [userState, setUserState] = useState([]);

      useEffect(() =>{
       
        checksignin()

        let arr = [];
        fire.database().ref("/")
            .child("contact")
            .on("child_added", (data) => {
                console.log(data.val());
                var obj = data.val();
                obj.id = data.key;
                arr.push(obj)
                setUserState([...arr]);
            });


        
        },[]);



const Delete=(val)=>{

  fire.database().ref(`/contact/${val.id}`).remove();
}



const editList=(val)=>{


let editLiTxt = prompt("EDIT TODO")


fire.database().ref(`/contact/${val.id}`).update(val.email)

.then(function(success){
  console.log(success,'success')
     })
     .catch(function(err){
  console.log(err,'err')
     })
}




return(

<>
<Header />

<div className='Heading'><h1>Welcome</h1>

</div>



<div className='MainDiva'>





<h1></h1>
            {
                userState && userState.map((val) => {
                    return (
                        <>
                           <p> {val.email} {val.password}</p>
              
                            <button onClick={()=>editList(val)}> Edit</button>
                            <button onClick={()=>Delete(val)}>Delete</button>
                            <br />
                        
                         
                                                         
                        </>
                    )
                })
            }











</div>
<Footer />
</>


)

}

export default Welcome;
