

const INITIAL_STATE = [{
    "47314fa1-ae56-4eae-80be-af6691145951": {
      "name": "tv",
      "price": 219.99,
      "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    }
}];
// const INITIAL_STATE = [];



function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD':
            console.log("payload is: ", action.payload)
            return [...state, ...action.payload]
        case 'REMOVE':
            return ([(state.filter(state => state[0] !== action.payload))])
        default:
            return state;
    }
}

export default cartReducer;