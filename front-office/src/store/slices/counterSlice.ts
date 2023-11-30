import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "@store/store";

interface CounterState {
    counterStep: number;
    counterValue: number;
}

const initialState: CounterState = {
    "counterStep": 1,
    "counterValue": 0,
};

const counterSlice = createSlice({
    "name": "counter",
    initialState,
    "reducers": {
        "changeStep": (state, action: PayloadAction<number>) => {
            state.counterStep = action.payload;
        },
        "increment": (state) => {
            state.counterValue += state.counterStep;
        },
        "decrement": (state) => {
            state.counterValue -= state.counterStep;
        },
    },
});

// Export all state in one object to have only to imports : Action and State.
export const counterState = {
    "Step": (state: RootState) => state.counter.counterStep,
    "Value": (state: RootState) => state.counter.counterValue,
};
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
