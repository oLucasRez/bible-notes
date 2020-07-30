import React from "react";

import { styles, Title, SubTitle } from "./styles";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../../theme/index";
import { FontAwesome as Icon } from "@expo/vector-icons";
//======================================================[ Header Component ]=
function Header() {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={Colors.theme}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Icon name="bars" size={28} color={Colors.white[0]} />
      <View style={styles.titleContainer}>
        <SubTitle>João 1 : 1-5</SubTitle>
        <Title>O Verbo</Title>
      </View>
      <Icon name="search" size={28} color={Colors.white[0]} />
    </LinearGradient>
  );
}

export default Header;
