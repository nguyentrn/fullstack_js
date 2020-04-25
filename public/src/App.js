import React from 'react';
// import { useQuery, gql } from '@apollo/client';
import ListPage from './pages/ListPage';
import { AppContainer } from './App.style';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const types = ['cpu', 'laptop'];

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar types={types}></Navbar>
        <Switch>
          {types.map((type) => (
            <Route path={`/${type}`}>
              <ListPage type={type} />
            </Route>
          ))}
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
