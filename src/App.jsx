import './App.css';
import { Main } from './Components/Main/Main';
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Switch, Route, Redirect } from "react-router-dom";
import { About } from './Components/About/About'
import { useState } from 'react';

function App() {

  const [gridView, setGridView] = useState(false);

  return (
    <div className="App">
      <Header gridView={gridView}/>
      <Switch>
        <Route exact path='/home' component={() => <Main gridView={gridView} />} />
        <Route exact path='/about' component={About} />
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
