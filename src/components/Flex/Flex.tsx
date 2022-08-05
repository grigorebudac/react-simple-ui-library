import React, { PropsWithChildren } from 'react';

import { Box } from 'components/Box';

export interface FlexProps {
  example?: string;
}

const Flex = (props: PropsWithChildren<FlexProps>) => {
  return <Box>{props.children}</Box>;
};

export { Flex };
