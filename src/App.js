import { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const rotateBgGradient = () => {
  for (let i = 0; i <= 360; i++) {
    setTimeout(300);
  }
}

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(313deg, rgba(211,31,47,1) 0%, rgba(19,51,103,1) 90%);
`;

function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}

export default App;
