import React from 'react'
import Button from '@mui/material/Button';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from '@mui/material'


const Footer=()=>{


return(

<>
<div className='MainDivf'>


<small>Created By: Fayyaz Ahmed | <CopyrightIcon fontSize='small'/>2022. All Rigts Reserved.</small>

<div className='navf'>

<Link href="/" underline="hover" marginLeft={5}>
  {'Home'}
</Link>


<Link href="/Add" underline="hover" marginLeft={5} >
  {'Add'}
</Link>


<Link href="/View" underline="hover" marginLeft={5}>
  {'View'}
</Link>




</div>



</div>
</>


)

}

export default Footer;
