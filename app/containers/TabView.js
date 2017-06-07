/**
 * root 
 * creat by gdz 20170605
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabBar from '../components/TabBar.js'
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Shoutem from './Shoutem';

const tabTitles = ['home', '逛吃', '我的']
const tabIcons = [
    require('../resource/ic_tab_search.png'),
    require('../resource/ic_tab_homepage.png'),
    require('../resource/ic_tab_my.png')
]
const tabSelectedIcon = [
    require('../resource/ic_tab_search_select.png'),
    require('../resource/ic_tab_homepage_select.png'),
    require('../resource/ic_tab_my_select.png')
]

export default class TabView extends Component {
  state={
    selectedTab:'home',
  }
  render() {
    return (

      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image style={styles.icon} source={tabIcons[0]} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={tabSelectedIcon[0]} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Shoutem />
        </TabNavigator.Item>
         <TabNavigator.Item
          selected={this.state.selectedTab === 'food'}
          title="Food"
          renderIcon={() => <Image style={styles.icon} source={tabIcons[1]} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={tabSelectedIcon[1]} />}
          onPress={() => this.setState({ selectedTab: 'food' })}>
           <Home tabLabel="Food" />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image style={styles.icon} source={tabIcons[2]} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={tabSelectedIcon[2]} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
           <Home tabLabel="Profile" />
        </TabNavigator.Item>
      </TabNavigator>

     /*<ScrollableTabView 
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
      </ScrollableTabView>*/
    );
  }
}


const styles = StyleSheet.create({

    icon: {
        width: 20,
        height: 20,
        marginBottom: 2
    }
})