import { USERS_FETCHED } from '../actions/users';
import { calcVector, calcUserId } from '../utils';

const initialState = {
    items: {},
    itemsOrder: []
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case USERS_FETCHED: {
        const itemsOrder = [];
        const items = {};

        action.payload.items.forEach((item) => {
            const computedId = calcUserId(item);

            itemsOrder.push(computedId);
            items[computedId] = {
                ...item,
                id: computedId,
                vector: calcVector(item.name.first, item.name.last)
            };
        });

        return {
            ...state,
            items: {
                ...state.items,
                ...items
            },
            itemsOrder: [...state.itemsOrder, ...itemsOrder],
            page: action.payload.page
        };
    }
    default:
        return state;
    }
}
