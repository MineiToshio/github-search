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
  ellipsis?: boolean;
};

const TextComponent = ({
  children,
  color,
  fontWeight = 'normal',
  fontFamily = 'default',
  fontSize,
  lineHeight,
  as = 'span',
  ellipsis = false,
}: Props) => (
  <Text
    color={color}
    fontWeight={fontWeight}
    fontFamily={fontFamily}
    fontSize={fontSize}
    lineHeight={lineHeight}
    as={as}
    ellipsis={ellipsis}
  >
    {children}
  </Text>
);

export default TextComponent;
