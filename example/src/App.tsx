import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Count from 'react-native-module_2';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  return (
    <View style={styles.container}>
      <Count />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
