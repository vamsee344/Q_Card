
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import QCardScannerScreen from './src/screens/QCardScannerScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <QCardScannerScreen />
      <Text>JJJJJ</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
