import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HomeIconOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
    />
  </Svg>
);
export default HomeIconOutline;
