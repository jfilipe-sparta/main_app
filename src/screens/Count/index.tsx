import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Count = () => {
  const [count, setCount] = useState(1);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{count} teste</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Contar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Count;
