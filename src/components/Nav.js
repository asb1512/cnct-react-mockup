import styled from 'styled-components';
import { useTrail, useTransition, animated } from 'react-spring';

const NavBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(25px);
  display: flex;
  flex-flow: column nowrap;
`;

const navOptions = [
  {
    text: "about us",
  },
  {
    text: "press",
  },
  {
    text: "join the waitlist",
  },
  {
    text: "host an event",
  },
  {
    text: "advertise with us",
  },
  {
    text: "contact us",
  },
  {
    text: "terms of service",
  },
  {
    text: "privacy policy"
  },
];

export default function Nav(props) {
  const springs = useTrail(navOptions.length, {
    to: {
      opacity: props.displayNav ? 1 : 0,
    },
    delay: 500,
    config: {
      tension: 250,
      duration: 600,
    },
  });

  return (
    <NavBg>
      {springs.map((animation, idx) => {
        return (
          <animated.div
            key={idx}
            style={animation}
          >
            {navOptions[idx].text}
          </animated.div>
        )
      })}
    </NavBg>
  )
}
