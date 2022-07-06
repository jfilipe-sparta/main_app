import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import api from '../../service/api';

export default function Generic() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ backgroundColor: '#fff', padding: 20 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}
