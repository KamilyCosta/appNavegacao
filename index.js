/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';

//consegue usar isso em qualquer lugar do app
export default props => {
    return(
        <PaperProvider>
            <App/>
        </PaperProvider>
    )
}


AppRegistry.registerComponent(appName, () => App);
