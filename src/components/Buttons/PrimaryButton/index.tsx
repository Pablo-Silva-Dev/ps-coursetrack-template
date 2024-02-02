import { TouchableOpacityProps } from 'react-native';
import { CSSProperties } from 'styled-components';
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  bgColor?: string;
  buttonTextStyle?: CSSProperties;
}

export function PrimaryButton({
  disabled,
  buttonTextStyle,
  title,
  ...rest
}: ButtonProps) {
  const DISABLED_BUTTON_OPACITY = 0.8;
  return (
    <Container
      activeOpacity={DISABLED_BUTTON_OPACITY}
      disabled={disabled}
      {...rest}
    >
      <Title allowFontScaling={false} style={buttonTextStyle as never}>
        {title}
      </Title>
    </Container>
  );
}
