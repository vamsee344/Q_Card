// src/components/QCardScannerScreen.js

import React, { useEffect } from 'react';
import { View, Button, Text, PermissionsAndroid, StyleSheet } from 'react-native';
import QCardScanner from '../components/QCardScanner';

const QCardScannerScreen = () => {
  useEffect(() => {
    requestCameraPermission();
    // QCardScanner.initializeOpenCV();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera for scanning QCards',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const startQCardScanner = () => {
    QCardScanner.startCamera();
  };

  const stopQCardScanner = () => {
    QCardScanner.stopCamera();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>QCard Scanner</Text>
      <Button title="Start Scanner" onPress={startQCardScanner} />
      <Button title="Stop Scanner" onPress={stopQCardScanner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default QCardScannerScreen;
