import React, { PropsWithChildren } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { theme } from 'theme';

const ThemeProvider = (props: PropsWithChildren) => {
  return <SCThemeProvider theme={theme}>{props.children}</SCThemeProvider>;
};

export { ThemeProvider };
