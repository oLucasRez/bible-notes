import styled from "styled-components/native";

import { Colors } from "../../../theme/index";
//============================================================[ Style Sheet ]=

//------------------------------------------------------[ Styled Components ]-
export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${({ mode }) => Colors.background[mode]};
`;
