const defaultState = {
    open: false,
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR': {
            return {
                ...state,
                open: !state.open,
            };
        }

        default: {
            return state;
        }
    }
}
