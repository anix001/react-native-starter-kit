import React from 'react';
import type { PropsWithChildren } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
    name:string;
}>

const Icons = ({name}:IconProps) => {
   switch(name){
    case 'circle':
        return <Icon name="circle-thin" size={38} color="#F7CD2E"/>;
    case 'cross':
        return <Icon name="times" size={38} color="#F7CD2E"/>;

    default:
        return <Icon name="pencil" size={38} color="#F7CD2E"/>;
   }
}

export default Icons