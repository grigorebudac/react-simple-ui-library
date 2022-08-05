import React, { PropsWithChildren } from 'react';

import { Box, BoxProps } from 'components/Box';

const Flex = ({ children, ...props }: PropsWithChildren<BoxProps>) => {
  return (
    <Box display="flex" {...props}>
      {children}
    </Box>
  );
};

export { Flex };
