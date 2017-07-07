import { USERS_FETCHED } from '../actions/users';

const initialState = {
    items: {},
    itemsOrder: []
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case USERS_FETCHED:
        const itemsOrder = [];
        const items = {};

        action.payload.items.forEach((item) => {
            const computedId = `${item.id.name}_${item.id.value}_${item.name.first}_${item.name.last}`;

            itemsOrder.push(computedId);
            items[computedId] = {
                ...item,
                id: computedId
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

    default:
        return state;
    }
}
