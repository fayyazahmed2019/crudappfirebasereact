import React from 'react'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import fire from '../Config/Config';
import {useHistory,useLocation} from "react-router-dom";




const Header=()=>{
    
const history = useHistory();


const logout=()=>{
    fire.auth().signOut().then(() => {
      // Sign-out successful.
        history.push('/')

    }).catch((error) => {
      // An error happened.
    });
  }


return(

<>
<div className='MainDiv'>


  
<h2>Crud App With Firebase</h2>

<div className='nav'>

<Button sx= {{marginRight: 5}}  variant="contained" href="/">Home</Button>
<Button sx= {{marginRight: 5}} variant="contained" href="/Add">Add</Button>

<Button sx= {{marginRight: 5}} variant="contained" href="/View">View</Button>


<Button  onClick={logout}> <LogoutIcon />Logout</Button>

</div>



</div>
</>


)

}

export default Header;
