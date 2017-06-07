/**
 * root 
 * creat by gdz 20170605
 * @flow
 */

import React, { Component } from 'react';
import {
  NetInfo, 
  Animated,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import Constants from './common/constants';
import {Provider} from 'react-redux';
import store from './redux/store';
import NetInfoDecorator from './common/NetInfoDecorator';
import App from './containers/App';

global.Common = Constants;

@NetInfoDecorator
export default class MyProject extends Component {
      constructor(props) {
        super(props);
        this.state = {
            promptPosition: new Animated.Value(0)
        }
    }

        componentWillReceiveProps(nextProps) {
        const {isConnected} = nextProps
        // 无网络
        if (!isConnected) {
            Animated.timing(this.state.promptPosition, {
                toValue: 1,
                duration: 200
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(this.state.promptPosition, {
                        toValue: 0,
                        duration: 200
                    }).start()
                }, 2000);
            })
        }
    }
  
      render() {
        let positionY = this.state.promptPosition.interpolate({
                inputRange: [0, 1],
                outputRange: [-30, Platform.OS === 'ios' ? 20 : 0]
            });
            return (
                <View style={{flex: 1}}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                    <Animated.View style={[styles.netInfoView, {top: positionY}]}>
                        <Text style={styles.netInfoPrompt}>网络异常，请检查网络稍后重试~</Text>
                    </Animated.View>
                </View>
            )
      }
}


const styles = StyleSheet.create({
    netInfoView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        position: 'absolute',
        right: 0,
        left: 0,
        backgroundColor: Constants.colors.themeColor
    },
    netInfoPrompt: {
        color: 'white',
        fontWeight: 'bold'
    }
});
