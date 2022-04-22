import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from './components/Nav';
import Header from './components/Header';
import Welcome from './components/Welcome';

const rotateBackground = keyframes`
  0%{background-position:10% 0%}
  50%{background-position:91% 100%}
  100%{background-position:10% 0%}
`;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(313deg, rgba(211,31,47,1) 0%, rgba(19,51,103,1) 71%);
  animation: ${rotateBackground} 10s linear infinite;
  background-size: 200% 200%;
  z-index: 0;
`;

function App() {
  const [displayNav, toggleNav] = useState(false);

  return (
    <AppWrapper>
      <Header displayNav={displayNav} toggleNav={toggleNav} />
      <Nav />
      <Welcome />
    </AppWrapper>
  );
}

export default App;
