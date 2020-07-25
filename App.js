/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';

import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import Navigation from './app/navigations/navigation';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (<Navigation />
    )
  }
}