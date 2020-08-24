import colorsSlice, {ColorsState} from "./slice";

const {reducer, actions} = colorsSlice;
const { decreaseSaturation, increaseSaturation, selectColor } = actions;

describe('colors reducer', () => {

    const initialState: ColorsState = {current: "Red", saturation: 50};

    it.each`
     color
     ${"Blue"}
     ${"Green"}
     ${"Red"}
     `('should select the $color color', ({color}) => {
        const nextState: ColorsState = reducer(initialState, selectColor(color));
        expect(nextState).toStrictEqual({...initialState, current: color});
    });

    it('should not increase the saturation when it is already 100', () => {
        const previousState: ColorsState = {current: "Red", saturation: 100};
        const nextState: ColorsState = reducer(previousState, increaseSaturation());
        expect(nextState).toStrictEqual(previousState);
    });

    it('should increase the saturation', () => {
        const nextState: ColorsState = reducer(initialState, increaseSaturation());
        expect(nextState).toStrictEqual({...initialState, saturation: 51});
    });

    it('should not decrease the saturation when it is already 0', () => {
        const previousState: ColorsState = {current: "Red", saturation: 0};
        const nextState: ColorsState = reducer(previousState, decreaseSaturation());
        expect(nextState).toStrictEqual(previousState);
    });

    it('should decrease the saturation', () => {
        const nextState: ColorsState = reducer(initialState, decreaseSaturation());
        expect(nextState).toStrictEqual({...initialState, saturation: 49});
    });

});

