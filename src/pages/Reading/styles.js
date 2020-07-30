import styled from "styled-components/native";

import { Colors, Fonts } from "../../../theme/index";
//============================================================[ Style Sheet ]=

//------------------------------------------------------[ Styled Components ]-
export const Container = styled.View`
  width: 100%;

  flex: 1;

  background: ${({ mode }) => Colors.background[mode]};
`;

export const Word = styled.Text`
  color: ${({ mode }) => Colors.foreground[mode][0]};
  font-size: 28px;
  font-family: ${Fonts.main[1]};
`;

export const Verse = styled.View`
  width: auto;
  margin: 5px 20px;

  flex-flow: wrap;
`;

export const Between = styled.View`
  width: 100%;
  height: 1px;
  margin: 15px 0;
  background: ${({ mode }) => Colors.foreground[mode][1]};
`;
