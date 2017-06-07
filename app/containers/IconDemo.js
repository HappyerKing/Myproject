/**
 * home
 * creat by gdz 20170605
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  AlertIOS,
  Text,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconDemo extends Component {
   state = {
    selectedTab: 'find',
  };

    loginWithFacebook = () => {   //点击"Login with Facebook"按钮后触发的方法
    AlertIOS.alert("facebook");
  }

  
  render() {
    return (
            <View style={styles.container}>
        <Icon
          name="rocket"   
          size={30}   //图片大小
          color="red"  //图片颜色
          />

        <Icon.Button    //在图片后加文字
          name="facebook"
          backgroundColor="#3b5998"
          onPress={this.loginWithFacebook} //点击该按钮后触发的方法
          >
          Login with Facebook
        </Icon.Button>

        <Icon.Button  //在图片后加, 自定义样式的文字
          name="facebook"
          backgroundColor="#3b5998">
          <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
        </Icon.Button>


      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

