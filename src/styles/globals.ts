import { light } from '@themes/light';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;
export const ColumnContainer = styled.View`
  width: 100%;
`;

export const GlobalStyles = StyleSheet.create({
  marginTopDefault: {
    marginTop: light.theme.spacings[4],
  },
  marginTopLarge: {
    marginTop: light.theme.spacings[10],
  },
  marginBottomDefault: {
    marginBottom: light.theme.spacings[4],
  },
  marginVerticalSmall: {
    marginTop: light.theme.spacings[3],
    marginBottom: light.theme.spacings[3],
  },
  marginVerticalDefault: {
    marginTop: light.theme.spacings[4],
    marginBottom: light.theme.spacings[4],
  },
  marginVerticalLarge: {
    marginTop: light.theme.spacings[6],
    marginBottom: light.theme.spacings[6],
  },
  marginBottomLastElement: {
    marginBottom: light.theme.spacings[10],
  },
  containerCenterItems: {
    alignItems: 'center',
  },
});
