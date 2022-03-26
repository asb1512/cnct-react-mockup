import styled, { keyframes } from 'styled-components';
import cnctIcon from '../images/cnct-logo-white-icon.png';

const WelcomeWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
`;

const fadeIn = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const Logo = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  align-self: end;
  width: auto;
  height: 45%;
  margin-bottom: 0.4rem;
  animation: ${fadeIn} 1.5s 1 ease-in;
`;

const MainText = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: center;
  align-self: start;
  margin-top: 0.4rem;
  text-align: center;
  font-size: 7vw;
`;

const loopText = keyframes`
  0% {opacity: 0}
  12.5% {opacity: 1}
  25% {opacity: 0}
  100% {opacity: 0}
`;

const TextOne = styled(MainText)`
  animation: ${loopText} 12s ease-in-out infinite;
`;

const TextTwo = styled(MainText)`
  animation: ${loopText} 12s ease-in-out infinite;
`;

const TextThree = styled(MainText)`
  animation: ${loopText} 12s ease-in-out infinite;
`;

const TextFour = styled(MainText)`
  animation: ${loopText} 12s ease-in-out infinite;
`;

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Logo src={cnctIcon} />
      <TextOne>Grab coffees.</TextOne>
      <TextTwo>Find your network.</TextTwo>
      <TextThree>Stay in the know.</TextThree>
      <TextFour>Attend events.</TextFour>
    </WelcomeWrapper>
  )
}

export default Welcome;