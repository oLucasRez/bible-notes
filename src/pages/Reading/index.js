import React, { useState, useEffect } from "react";

import Header from "../../components/Header";

import { Text, ScrollView, View } from "react-native";

import rawText from "../../../text.json";

import { Container, Word, Verse, Between } from "./styles";
//==========================================================[ Reading Page ]=
function Reading() {
  const [verses, setVerses] = useState([]);
  const book = "João";
  const mode = "moon";

  useEffect(() => {
    setVerses([]);
    console.log(verses);

    Object.keys(rawText[book]).forEach((pericope) => {
      const texts = rawText[book][pericope];

      Object.keys(texts).forEach((address) => {
        const [chapter, verse] = address.split(":");
        const text = texts[address].split(" ");

        setVerses((verses) => [...verses, { pericope, chapter, verse, text }]);
      });
    });
  }, []);

  function getText(text) {
    return text.map((value, index) => (
      <View key={index} style={{ marginHorizontal: 5 }}>
        <Word mode={mode}>{value}</Word>
      </View>
    ));
  }

  function getSpace(current) {
    if (current !== previous) {
      previous = current;
      return <Between mode={mode} />;
    }
    return null;
  }

  let previous = verses[0].pericope;

  return (
    <Container mode={mode}>
      <Header />
      <ScrollView>
        {verses.map((value, index) => (
          <Verse key={index}>
            {getSpace(value.pericope)}
            {getText(value.text)}
          </Verse>
        ))}
      </ScrollView>
    </Container>
  );
}

export default Reading;
