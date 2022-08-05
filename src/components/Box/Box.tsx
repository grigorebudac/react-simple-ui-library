import styled from 'styled-components';
import {
  space,
  layout,
  background,
  flexbox,
  display,
  border,
  shadow,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  DisplayProps,
  FlexboxProps,
  BorderProps,
  BoxShadowProps
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    BackgroundProps,
    FlexboxProps,
    DisplayProps,
    BorderProps,
    BoxShadowProps {}

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${background}
  ${flexbox}
  ${display}
  ${border}
  ${shadow}
`;

export { Box };
