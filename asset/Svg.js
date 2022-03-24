import React from 'react';
import Svg, {Path, Circle, Rect} from 'react-native-svg';

export const XIcon = ({...props}) => (
  <Svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.5 1L1 10.5"
      stroke="#0A191E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M1 1L10.5 10.5"
      stroke="#0A191E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const RoundedC = ({...props}) => (
  <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
    <Circle
      cx="50"
      cy="50"
      r="45"
      stroke="blue"
      strokeWidth="2.5"
      fill="green"
    />
    <Rect
      x="15"
      y="15"
      width="70"
      height="70"
      stroke="red"
      strokeWidth="2"
      fill="yellow"
    />
  </Svg>
);
