import React from "react";

const SizePart = (props: {
    length: string,
    backgroundSize: { backgroundSize: string },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    return <div>
        <div className={"flex justify-between items-center"}>
            <span>Character Length</span>
            <span className={"text-[#a4ffaf] text-4xl"}>{props.length}</span>
        </div>
        <div>
            <input className={"custom-slider"} style={props.backgroundSize} type="range" min="0" max="20" step={"1"}
                   value={+props.length}
                   onChange={props.onChange}/>
        </div>
    </div>;
}

export default SizePart