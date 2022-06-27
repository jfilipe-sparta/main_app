import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <View>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Contar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
