import React from 'react'

import Welcome from './Components/Welcome/Welcome';
import Add from './Components/Add'
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Components/Main/Main.css'
import './Components/Welcome/Welcome.css'

import './Components/Login/Login.css'






function App(){

return(

<>


<br />

<Router>



      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/Welcome' component={Welcome} />
        <Route path='/Add' component={Add} />



      </Switch>

    


    </Router>

    
</>


)

}

export default App;