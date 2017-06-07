/**
 * 路由
 */
import React, {PureComponent} from 'react';
import {
    View,
    Platform,
    StatusBar
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import {observer} from 'mobx-react/native';
import TabBarView from './TabView';
import userStore from '../mobx/userStore';

@observer
export default class App extends PureComponent {

    _configureScene = route => {
        if (route.sceneConfig) return route.sceneConfig

        return {
            ...Navigator.SceneConfigs.PushFromRight,
            gestures: {}    // 禁用左滑返回手势
        }
    }

    _renderScene = (route, navigator) => {
        let Component = route.component
        return <Component navigator={navigator}{...route.Props}/>
    }

    render() {
        const initialPage =  TabBarView ;
        const initialPageName =  'TabBarView' ;

        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle='light-content'/>
                <Navigator
                    initialRoute={{name: initialPageName, component: initialPage}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene}
                />
            </View>
        )
    }
}