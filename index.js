import { registerRootComponent } from 'expo';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from './App';
import myReducer from "./src/reducer/index";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

// AppRegistry.registerComponent(appName, () => App);

// if (Platform.OS === 'web') {
//     const rootTag = document.getElementById('root') || document.getElementById('main');
//     AppRegistry.runApplication('main', { rootTag });
// }

const store = createStore(
    myReducer,
    compose(
        applyMiddleware(thunk)
    )

);
// const store = createStore(myReducer, composeWithDevTools(
//     applyMiddleware(...thunk),
//     // other store enhancers if any
// ));
const appRedux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )

}
registerRootComponent(appRedux);
// AppRegistry.registerComponent('main', () => appRedux);