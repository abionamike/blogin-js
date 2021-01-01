import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore,combineReducers, applyMiddleware } from 'redux'
import { blogCreateReducer, blogDetailsReducer, blogListReducer, blogUpdateReducer, blogDeleteReducer } from './reducers/blogReducer';


const reducer = combineReducers({
    blogList: blogListReducer,
    blogDetails: blogDetailsReducer,
    blogCreate: blogCreateReducer,
    blogUpdate: blogUpdateReducer,
    blogDelete: blogDeleteReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;