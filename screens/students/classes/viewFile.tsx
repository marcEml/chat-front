import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { PdfView } from 'react-native-pdf-light';

export default function ViewFile() {
  const source = { uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf", cache: true };

  return (
    <View>
     <PdfView page={1} source={"https://drive.google.com/file/d/1rRqukaS-TgfmCJkdEcUkryV7t5_hljRs/view?usp=sharing"} />
    </View>
  );
}
