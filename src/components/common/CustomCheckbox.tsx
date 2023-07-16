import React, {useEffect, useState} from "react";
import {addOptions, deleteOptions} from "../../redux/mainSlice.ts";
import {useAppDispatch} from "../../hooks.ts";

interface CheckboxProps {
    label: string,
    checked: boolean,
    min: number,
    max: number,
}
const CustomCheckbox: React.FC<CheckboxProps> = ({ label, checked, min, max }) => {
    const dispatch = useAppDispatch()
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const [touched, setTouched] = useState(false)
    useEffect(() => {
        if(isChecked) {
            dispatch(addOptions([min, max]))
            setTouched(true)
        }
        if(!isChecked && touched) {
            dispatch(deleteOptions([min, max]))
        }
    }, [dispatch, isChecked, max, min])

    return (
        <div className="checkbox-wrapper">
            <label className={'flex items-center'}>
                <input type="checkbox" checked={isChecked}
                       className={isChecked ? "checked" : ""}
                       onChange={() => setIsChecked((prev) => !prev)}/>
                <span>{label}</span>
            </label>
        </div>
    );
};
export default CustomCheckbox;