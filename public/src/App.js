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

const types = [
  'cpu',
  'mobile-chipset',
  'graphics-card',
  'motherboard',
  'ssd',
  'router',
  'monitor',
  'laptop',
  'headphone',
  'phone',
  'tablet',
];

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar types={types}></Navbar>
        <Switch>
          {types.map((type) => (
            <Route key={type} path={`/${type}`}>
              <ListPage type={type} />
            </Route>
          ))}
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
