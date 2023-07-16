import {useEffect, useState} from "react";
import {useAppSelector} from "../../../hooks.ts";
import StrengthBlock from "./strengthBlock/StrengthBlock.tsx";

const Strength = () => {
    const strength = useAppSelector(state => state.mainSlice.strength)
    const [color, setColor] = useState('transparent')
    const [strengthWord, setStrengthWord] = useState('')
    const filledStrengthBlocks= Array.from({length: strength}, (_, index) => <StrengthBlock key={index} color={color}/>)
    const strengthBlocks= Array.from({length: 4 - strength}, (_, index) => <StrengthBlock key={index} color={'transparent'}/>)
    useEffect(() => {
        switch (strength) {
            case 0: {
                setColor('transparent')
                setStrengthWord('')
                break
            }
            case 1: {
                setColor('green')
                setStrengthWord('WEAK')
                break
            }
            case 2: {
                setColor('yellow')
                setStrengthWord('GOOD')
                break
            }
            case 3: {
                setColor('orange')
                setStrengthWord('STRONG')
                break
            }
            case 4: {
                setColor('red')
                setStrengthWord('VERY STRONG')
                break
            }
        }
    }, [strength])

    return <div className={"p-4 flex justify-between bg-[#18171f]"}>
        <span className={"text-[#7a7886] font-semibold"}>STRENGTH</span>
        <div className={"flex gap-2"}>
            <span>{strengthWord}</span>
            {filledStrengthBlocks}
            {strengthBlocks}
        </div>
    </div>;
}
export default Strength