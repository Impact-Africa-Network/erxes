import { keyframes } from 'styled-components';

const rotate: any = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const wave: any = keyframes`
  0%{
    transform:translateY(0px)
  }
  28%{
    transform:translateY(-5px)
  }
  44%{
    transform:translateY(0px)
  }
`;

const fadeIn: any = keyframes`
  0% {
    opacity: 0;
	}
	
  100% {
    opacity: 1;
  }
`;

const slideDown: any = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0.7;
	}
	
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideRight: any = keyframes`
  0% {
    transform: translateX(20px);
    opacity: 0.7;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideLeft: any = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0.7;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const shake: any = keyframes`
  0%{transform:rotate(-10deg)}
  28%{transform:rotate(10deg)}
  10%{transform:rotate(20deg)}
  18%{transform:rotate(-20deg)}
  28%{transform:rotate(20deg)}
  30%,100%{transform:rotate(0deg)}
`;

const twinkling: any = keyframes`
  from {
    background-position:0 0;
  }

  to {
    background-position:-10000px 5000px;
  }
`;

const stripe: any = keyframes`
  from {
    background-position: 16px 0;
  }
  to {
    background-position: 0 0;
  }
`;

const highlight: any = keyframes`
  0% { box-shadow: 0 0 -5px 0 #63D2D6; }
  40% { box-shadow: 0 0 10px 0 #63D2D6; }
  60% { box-shadow: 0 0 10px 0 #63D2D6; }
  100% { box-shadow: 0 0 -5px 0 #63D2D6; }
`;

const robotAnimation: any = keyframes`
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}`;

const pop: any = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
    transform-origin: 50% 50%;
  }
  to {
    opacity: 1;
    transform: scale(1);
    transform-origin: 50% 50%;
  }
}`;

const animationPulse: any = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(60, 205, 56, 0.3);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(60, 205, 56, 0);
  }
}`;

export {
  rotate,
  fadeIn,
  slideDown,
  slideLeft,
  slideRight,
  shake,
  twinkling,
  stripe,
  wave,
  robotAnimation,
  highlight,
  pop,
  animationPulse,
};
