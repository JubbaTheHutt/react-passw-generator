import CustomCheckbox from "../../common/CustomCheckbox.tsx";
import React from "react";

const Options: React.FC = () => {

    return <div className={"flex flex-col gap-4"}>
            <CustomCheckbox checked={false} min={26} max={51} label={'Include Uppercase Letters'} />
            <CustomCheckbox checked={false} min={0} max={25} label={'Include Lowercase Letters'} />
            <CustomCheckbox checked={false} min={52} max={61} label={'Include Numbers'} />
            <CustomCheckbox checked={false} min={62} max={71} label={'Include Symbols'} />
    </div>;
}

export default Options