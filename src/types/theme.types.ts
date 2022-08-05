export declare module Theme {
  type ColorVariation = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  type SizeVariation = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type ReducedSizeVariation = 'sm' | 'md' | 'lg';
  type WeightVariation = 'normal' | 'light' | 'bold';

  type Color = Record<ColorVariation, string>;

  export type Palette = {
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    light: string;
    dark: string;
  };

  export type SimpleColors = {
    black: string;
    white: string;
    blue: Color;
    indigo: Color;
    purple: Color;
    pink: Color;
    red: Color;
    orange: Color;
    yellow: Color;
    green: Color;
    teal: Color;
    cyan: Color;
    gray: Color;
  };

  export type Colors = Palette & SimpleColors;

  export type FontSizes = Record<SizeVariation, string>;

  export type Fonts = {
    primary: string;
    secondary: string;
  };

  export type FontWeights = Record<WeightVariation, string>;
  export type LineHeights = {
    normal: string;
  };
  export type LetterSpacings = {
    normal: string;
  };
  export type Borders = Record<ReducedSizeVariation, string>;
  export type BorderWidths = Record<ReducedSizeVariation, string>;
  export type Radii = Record<ReducedSizeVariation, string>;
  export type Shadows = Record<ReducedSizeVariation, string>;
  export type ZIndices = {
    modal: number;
    toast: number;
  };
  export type Breakpoints = Record<ReducedSizeVariation, string>;
  export type MediaQueries = Record<ReducedSizeVariation, string>;

  export type Theme = {
    colors: Colors;
    fontSizes: FontSizes;
    fonts: Fonts;
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    letterSpacings: LetterSpacings;
    borders: Borders;
    borderWidths: BorderWidths;
    radii: Radii;
    shadows: Shadows;
    zIndices: ZIndices;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
  };
}
