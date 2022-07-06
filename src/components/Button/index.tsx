import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  label: string;
}

const Button = ({ label, ...rest }: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#6D466B',
        borderColor: '#412234',
        borderWidth: 2,
        borderRadius: 4,
        padding: 8,
      }}
      {...rest}
    >
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
