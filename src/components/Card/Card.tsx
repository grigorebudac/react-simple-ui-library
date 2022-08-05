import React, { PropsWithChildren } from 'react';
import { Box } from 'components/Box';

export interface CardProps {
  example?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
  return (
    <Box border="sm" borderColor="primary" boxShadow="sm">
      {props.children}
    </Box>
  );
};

export { Card };
