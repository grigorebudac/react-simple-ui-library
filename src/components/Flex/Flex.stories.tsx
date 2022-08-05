import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'Flex',
  component: Flex
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex>Flex</Flex>;

export const Default = Template.bind({});
