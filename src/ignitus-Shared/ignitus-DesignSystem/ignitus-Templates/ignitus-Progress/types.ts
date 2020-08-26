export interface ProgressProps {
  steps?: number;
  current?: number;
  lineWidth?: number;
  lineHeight?: number;
  circle?: number;
  lineTransitionDuration?: number;
  circleTransitionDelayDuration?: number;
}

export interface CircleProps {
  fill?: boolean;
  current?: boolean;
  size: number;
  delay: number;
}

export interface LineProps {
  fill?: boolean;
  width: number;
  height: number;
  transition: number;
}
