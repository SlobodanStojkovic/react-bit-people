import './App.css';
import { Main } from './Components/Main/Main';
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Switch, Route, Redirect } from "react-router-dom";
import { About } from './Components/About/About'
import { useState } from 'react';
import { getUsers } from './Services/getUsers';
import {useEffect} from 'react';

function App() {

  const [gridView, setGridView] = useState(false);
  const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers()
            .then(users => setUsers(users))
    }, [])

  const refresh = () => {
    getUsers()
      .then(response => setUsers(response));
  }

  const buttonClick = () => {
        console.log(!gridView);
    setGridView(!gridView);
    }

  return (
    <div className="App">
      <Header gridView={gridView} buttonClick={buttonClick} refresh={refresh}/>
      <Switch>
        <Route exact path='/home' component={() => <Main gridView={gridView} users={users} />} />
        <Route exact path='/about' component={About} />
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
