import React, {useState} from "react";
import Options from "./options/Options.tsx";
import Strength from "./strength/Strength.tsx";
import GenerateBtn from "./generateBtn/GenerateBtn.tsx";
import SizePart from "./sizePart/SizePart.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {updatePassword} from "../../redux/mainSlice.ts";

const GeneratorSettings: React.FC = () => {
    const [length, setLength] = useState('0')
    const dispatch = useAppDispatch()
    const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()'
    const options = useAppSelector(state => state.mainSlice.options)
    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(+length * 100) / 20}% 100%`,
        };
    };
    const randomChar = () => {
        const randomOption = options[Math.floor(Math.random() * options.length)]
        const min = randomOption[0]
        const max = randomOption[1]
        return symbols[Math.floor(Math.random() * (max - min + 1) + min)]
    }
    const generateRandomPassword = () => {
        let str = ''
        while (str.length < +length) {
            str += randomChar()
        }
        console.log(symbols.length)
        dispatch(updatePassword(str))
    }

    return <div className={"flex flex-col gap-8 bg-[#24232b] p-8 w-full"}>
        <SizePart length={length} backgroundSize={getBackgroundSize()}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLength(e.target.value)}/>
        <Options/>
        <Strength/>
        <GenerateBtn length={+length} generateRandomPassword={generateRandomPassword}/>
    </div>;
}

export default GeneratorSettings