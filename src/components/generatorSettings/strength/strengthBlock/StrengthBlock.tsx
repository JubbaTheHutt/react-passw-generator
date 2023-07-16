import React from 'react';

interface StrengthBlockTypes {
    color: string,
}

const StrengthBlock: React.FC<StrengthBlockTypes> = ({color}) => {
    return (
        <div className={"p-[3px] border-2 border-[#d1d0d8] h-full"}
             style={color !== 'transparent' ? {backgroundColor: color, borderColor: color} : {
                 backgroundColor: color,
                 borderColor: '#d1d0d8'
             }}/>
    );
};

export default StrengthBlock;