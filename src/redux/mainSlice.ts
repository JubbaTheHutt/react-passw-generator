import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface mainSlice {
    password: string,
    options: Array<number[]>,
    strength: number,
}

const initialState: mainSlice = {
    password: '',
    options: [],
    strength: 0,
}
export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        updatePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        addOptions: (state, action: PayloadAction<number[]>) => {
            state.options.push(action.payload)
            state.strength++
        },
        deleteOptions: (state, action: PayloadAction<number[]>) => {
            function arraysAreEqual(arr1: number[], arr2: number[]) {
                if (arr1.length !== arr2.length) {
                    return false;
                }

                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) {
                        return false;
                    }
                }

                return true;
            }

            state.options = state.options.filter(item => !arraysAreEqual(item, action.payload));
            state.strength--
        }
    }
})

export const {updatePassword, addOptions, deleteOptions} = mainSlice.actions
export default mainSlice.reducer