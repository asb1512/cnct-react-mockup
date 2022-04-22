import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTrail, useSpring, animated } from 'react-spring';
import leftWhite from '../images/cnct-left-icon-white.png';
import rightWhite from '../images/cnct-right-icon-white.png';

const WelcomeWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
`;

const BlurbWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: center;
  align-self: center;
  display: block;
  font-size: 3rem;
  font-weight: 300;
  line-height: 3rem;
`;

const blurbData = [
  'Grab coffees.',
  'Find your network.',
  'Stay in the know.',
  'Attend events.',
];

const Welcome = () => {
  const [on, toggle] = useState(false);

  useEffect(() => {
    setTimeout(() => toggle(true), 1000);
  }, [])
  

  const springs = useTrail(4, {
    to: {
      opacity: on ? 1 : 0,
      translateY: on ? 0 : -75,
    },
    delay: 500,
    config: {
      tension: 250,
      duration: 600,
    },
  });

  const leftHalfStye = useSpring({
    translateX: on ? 0 : -250,
    opacity: on ? 1 : 0,
  });
  const rightHalfStyle = useSpring({
    translateX: on ? 0 : 250,
    opacity: on ? 1 : 0,
  });

  return (
    <WelcomeWrapper>
      
      <animated.img 
        src={leftWhite}
        alt="CNCT"
        style={{
          ...leftHalfStye,
          gridColumn: '1/2',
          gridRow: '1/2',
          justifySelf: 'center',
          alignSelf: 'center',
        }}
        className='left-half'
      />
      <animated.img
        src={rightWhite}
        alt="CNCT"
        style={{
          ...rightHalfStyle,
          gridColumn: '1/2',
          gridRow: '1/2',
          justifySelf: 'center',
          alignSelf: 'center',
        }}
        className='right-half'
      />
      <BlurbWrapper>
        {springs.map((animation, idx) => {
          return (
            <animated.div
              key={idx}
              style={{
                ...animation,
                justifySelf: 'center',
                alignSelf: 'start',
                width: 'auto',
                margin: '1rem 0 1rem 1rem'
              }}
            >
              {blurbData[idx]}
            </animated.div>
          )
        })}
      </BlurbWrapper>
    </WelcomeWrapper>
  )
}

export default Welcome;