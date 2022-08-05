import React, { PropsWithChildren } from 'react';

import * as Styles from './Card.styles';

export interface CardProps {
  example?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
  return <Styles.Container>{props.children}</Styles.Container>;
};

export { Card };
