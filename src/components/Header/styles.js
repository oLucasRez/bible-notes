import styled from "styled-components/native";
import { StyleSheet } from "react-native";

import { Colors, Fonts } from "../../../theme/index";
//============================================================[ Style Sheet ]=
export const styles = StyleSheet.create({
  linearGradient: {
    height: 102,
    paddingHorizontal: 32,
    paddingTop: 18,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
//------------------------------------------------------[ Styled Components ]-
export const Title = styled.Text`
  font-size: 32px;
  color: ${Colors.white[0]};
  font-family: ${Fonts.main[2]};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${Colors.white[0]};
  opacity: 0.75;
  font-family: ${Fonts.side.regular[2]};
`;
