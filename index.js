/**
 * @format
 */
import { registerRootComponent } from "expo";
import App from "./App";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


