/**
 * home
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
import userStore from '../mobx/userStore';
import ScrollableTabView ,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Shoutem from './Shoutem';
import IconDemo from './IconDemo';
import { NavigationBar,Title ,Icon,DropDownMenu} from '@shoutem/ui';
const {user:{name}} = userStore;

export default class Home extends Component {
  state={
    selectedCar:{}
  }

  render() {
    return (
      <View style={{flex:1,}}>
        <Image
          source={require('../resource/image-3.png')}
          style={{ width: Common.width, height: 70 }}
        >
          <NavigationBar
            styleName="clear"
            leftComponent={<Icon name="sidebar" />}
            centerComponent={<Title>首页</Title>}
            rightComponent={<DropDownMenu
                options={[
                  { name: 'All', value: 1 },
                  { name: 'Sport', value: 1 },
                  { name: 'World', value: 1 },
                  { name: 'Lifestyle', value: 1 },
                  { name: 'Food', value: 1 },
                  { name: 'Music', value: 1 },
                  { name: 'Movies', value: 1 },
                  { name: 'Tech', value: 1 },
                  { name: 'Fun', value: 1 },
                  { name: 'Fashion', value: 1 },
                ]}
                selectedOption={this.state.selectedCar ? this.state.selectedCar : { name: 'All', value: 1 }}
                onOptionSelected={(car) => this.setState({ selectedCar: car })}
                titleProperty="name"
                valueProperty="value"
              />}
          />
        </Image>
        <ScrollableTabView
          style={{marginTop: 0, }}
          renderTabBar={() => <ScrollableTabBar />}
        >
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
            <Shoutem tabLabel='tab #4'/>
            <Text tabLabel='Tab #5'>My</Text>
            <Text tabLabel='Tab #6'>favorite</Text>
            <Text tabLabel='Tab #7'>project</Text>
        </ScrollableTabView>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});