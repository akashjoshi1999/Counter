const reducer = (state, action) => {
    if (action.type === 'UPDATE_FIELD') {
        const { input, value } = action.payload;
        return { ...state, [input]: value };
    }

    if (action.type === 'FETCH_SUCCESS') {
        return [{ ...state, post: action.payload }];
    }

    if (action.type === 'ADD') {
        return { ...state, ...action.payload }
    }

    if (action.type === 'DELETE') {
        return state.filter(post => post.id !== action.payload);
    }

    if (action.type === 'CLEAR') {
        return {
            title: "",
            body: "",
        }
    }

    if (action.type === 'ON_EDIT') {
        return { ...state, ...state['0'].post[action.payload] };
    }

    if (action.type === 'UPDATE') {
        return { ...state, ...action.payload }
    }

    throw new Error('no matching action type')
}
export default reducer;