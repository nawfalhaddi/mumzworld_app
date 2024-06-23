import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const BaseTouchableOpacity = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

export default BaseTouchableOpacity;
