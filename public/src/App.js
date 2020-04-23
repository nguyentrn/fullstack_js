import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CardList from './components/CardList';
import { AppContainer } from './App.style';

const GET_CPUS = gql`
  {
    cpus {
      name
      id
      img_url
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_CPUS);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <AppContainer>
      <div>Danh sach CPU</div>
      <CardList cpus={data.cpus} />
    </AppContainer>
  );
}

export default App;
