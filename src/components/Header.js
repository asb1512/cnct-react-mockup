import styled from 'styled-components';
import { Squeeze as Hamburger } from 'hamburger-react';
import cnctLogo from '../images/cnct-logo-white.png';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 10vh;
  z-index: 20;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 100%;
  opacity: 0.4;
`;

const HeaderLeft = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  width: 80%;
  height: auto;
  display: flex;
`;

const HeaderRight = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  width: auto;
  height: auto;
  z-index: 6;
`;

const Logo = styled.img`
  width: 50%;
  height: auto;
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Logo src={cnctLogo} />
      </HeaderLeft>
      <HeaderRight>
        <Hamburger 
          size={40} 
          duration={0.3}
          distance='sm'
          color='#FFF'
          onClick={() => props.toggleNav(!props.displayNav)}
        />
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;