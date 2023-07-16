import React, {useState} from "react";
import {MdContentCopy} from "react-icons/md";
import {useAppSelector} from "../../hooks.ts";

const Password: React.FC = () => {
    const password = useAppSelector(state => state.mainSlice.password)
    const [isCopied, setIsCopied] = useState(false)
    const copyToClipboard = async () => {
        if ('clipboard' in navigator) {
            await navigator.clipboard.writeText(password);
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        } else {
            document.execCommand('copy', true, password);
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 3000)
        }
    }

    return <>
        <div className={"p-2"}>
            <h1 className={"text-[#858194] text-2xl font-semibold"}>Password Generator</h1>
        </div>
        <div className={"w-full bg-[#24232b] text-[1.7rem] flex items-center justify-between px-8 py-4"}>
            <span style={password ? {color: "#edecf2"} : {color: "#56555d"}}
                  className={"text-[#56555d] font-semibold"}>{password ? password : "P4%5W0rD!"}</span>
            <button
                className={"text-[#a4ffaf] transition-all cursor-pointer disabled:cursor-default enabled:hover:text-white"}
                onClick={copyToClipboard} disabled={!password || isCopied}>
                {isCopied ? 'Copied!' : <MdContentCopy/>}
            </button>
        </div>
    </>;
}

export default Password