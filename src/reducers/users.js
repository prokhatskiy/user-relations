import md5 from 'md5';
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
            const computedId = md5(
                item.id.name +
                item.id.value +
                item.name.first +
                item.name.last +
                new Date().getTime()
            );

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
