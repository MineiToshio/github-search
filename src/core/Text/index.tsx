import React, { ReactNode } from 'react';
import { Text } from './styles';
import type {
  FontFamily,
  FontWeight,
  FontSize,
  Color,
} from '../../styles/theme';

type Props = {
  children: ReactNode;
  color: Color;
  fontWeight?: FontWeight;
  fontFamily?: FontFamily;
  fontSize: FontSize;
  lineHeight: string;
  as?: 'h2' | 'h3' | 'p' | 'span';
};

const TextComponent = ({
  children,
  color,
  fontWeight = 'normal',
  fontFamily = 'default',
  fontSize,
  lineHeight,
  as = 'span',
}: Props) => (
  <Text
    color={color}
    fontWeight={fontWeight}
    fontFamily={fontFamily}
    fontSize={fontSize}
    lineHeight={lineHeight}
    as={as}
  >
    {children}
  </Text>
);

export default TextComponent;
