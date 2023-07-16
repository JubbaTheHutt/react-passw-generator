import {BsArrowRightShort} from "react-icons/bs";
import React from "react";
import {useAppSelector} from "../../../hooks.ts";

interface GenerateBtnTypes {
    generateRandomPassword: () => void,
    length: number
}

const GenerateBtn: React.FC<GenerateBtnTypes> = ({length, generateRandomPassword}) => {
    const options = useAppSelector(state => state.mainSlice.options)

    return <div>
        <button
            disabled={length === 0 || !options.length}
            onClick={generateRandomPassword}
            className={"w-full bg-[#a4ffaf] disabled:bg-[#6aa871] font-semibold text-[#17301d] flex items-center justify-center gap-4 p-4"}>
            GENERATE <BsArrowRightShort className={"text-2xl"}/>
        </button>
    </div>;
}

export default GenerateBtn