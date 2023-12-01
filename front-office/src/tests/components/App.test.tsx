import {describe, test, expect} from "vitest";
import {screen} from "@testing-library/react";
import {renderWithProviders} from "@tests/wrapperProvider";
import App from "@components/App";
import {setupStore} from "@store/store";
import {counterActions} from "@slices/counterSlice";

describe("App component", () => {
    test("App mounts properly", () => {
        renderWithProviders(<App />);
        const tested = screen;
        expect(tested).toBeTruthy();
    });

    test("App mounts properly", () => {
        renderWithProviders(<App />);
        const tested = screen.getByText(
            /Starter rapide pour un nouveau projet/i
        );
        expect(tested).toBeInTheDocument();
    });
});

describe("Test store", () => {
    test("Change Step function", () => {
        const store = setupStore();
        let Step = store.getState().counter.counterStep;
        expect(Step).toBe(1);
        store.dispatch(counterActions.changeStep(2));
        Step = store.getState().counter.counterStep;
        expect(Step).toBe(2);
    });

    test("Increment function", () => {
        const store = setupStore();
        let Value = store.getState().counter.counterValue;
        expect(Value).toBe(0);
        store.dispatch(counterActions.increment());
        Value = store.getState().counter.counterValue;
        expect(Value).toBe(1);
    });

    test("Decrement function", () => {
        const store = setupStore();
        let Value = store.getState().counter.counterValue;
        expect(Value).toBe(0);
        store.dispatch(counterActions.decrement());
        Value = store.getState().counter.counterValue;
        expect(Value).toBe(-1);
    });

    test("AllCounter features in action", () => {
        const store = setupStore();
        let Value = store.getState().counter.counterValue;
        let Step = store.getState().counter.counterStep;
        expect(Value).toBe(0);
        expect(Step).toBe(1);
        store.dispatch(counterActions.increment());
        Value = store.getState().counter.counterValue;
        expect(Value).toBe(1);
        store.dispatch(counterActions.changeStep(5));
        store.dispatch(counterActions.decrement());
        Step = store.getState().counter.counterStep;
        Value = store.getState().counter.counterValue;
        expect(Value).toBe(-4);
        expect(Step).toBe(5);
    });
});
