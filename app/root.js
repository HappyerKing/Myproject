/**
 * root 
 * creat by gdz 20170605
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './containers/Home.js'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Constants from './common/constants';
import TabBar from './components/TabBar.js'
global.Common = Constants;

const tabTitles = ['home', '逛吃', '我的']
const tabIcons = [
    require('./resource/ic_tab_search.png'),
    require('./resource/ic_tab_homepage.png'),
    require('./resource/ic_tab_my.png')
]
const tabSelectedIcon = [
    require('./resource/ic_tab_search_select.png'),
    require('./resource/ic_tab_homepage_select.png'),
    require('./resource/ic_tab_my_select.png')
]

export default class MyProject extends Component {
  render() {
    return (
     <ScrollableTabView 
        renderTabBar={() =>
            <TabBar
                tabNames={tabTitles}
                tabIconNames={tabIcons}
                selectedTabIconNames={tabSelectedIcon}
            />
        }
        tabBarPosition='bottom'
        locked
        scrollWithoutAnimation
        >
        <Home tabLabel="home" />
        <Home tabLabel="Flow" />
        <Home tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
}
