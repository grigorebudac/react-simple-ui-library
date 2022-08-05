import React, { PropsWithChildren } from 'react';

export interface TextProps {
  color?: string;
}

const Text = (props: PropsWithChildren<TextProps>) => {
  return <p style={{ color: props.color }}>{props.children}</p>;
};

export { Text };
