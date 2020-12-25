/**
// <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
// <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} />
// <ViroAmbientLight color={"#aaaaaa"} />
// <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
// position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
// <ViroARPlaneSelector>
// <Viro3DObject
// source={require('./res/emoji_smile/emoji_smile.vrx')}
// resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
// require('./res/emoji_smile/emoji_smile_normal.png'),
// require('./res/emoji_smile/emoji_smile_specular.png')]}
// position={[0, .5, 0]}
// scale={[.2, .2, .2]}
// type="VRX" />
// </ViroARPlaneSelector>
//
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';


// Sets the default scene you want for AR and VR
const InitialARScene = require('./js/res/scenes/HelloWorldSceneAR');

const UNSET = "UNSET";
const AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
const defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  // The top level switch, that says "has a button been pressed? which one?" based on the
  // state of navigatorType
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  // THE MAIN MENU, (returns js for the main menu) 
  _getExperienceSelector() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
        <ScrollView>
       
         <Text style={localStyles.titleText}>
          Welcome to FLIPPLY, 
          </Text>

         <Text style={localStyles.titleText}>
           Pick a trick
          </Text>

          <Text style={localStyles.titleText}>
          Beginner
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Ollie 
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          backside pop shuv-it
          </Text>
          </TouchableHighlight>


          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          frontside pop shuv-it
          </Text>
          </TouchableHighlight>


          <Text style={localStyles.titleText}>
          Intermediate
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Kickflip
          </Text>
          </TouchableHighlight>


          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Heelflip 
          </Text>
          </TouchableHighlight>


          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Varial flip
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Varial Heel-flip
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Hard flip
          </Text>
          </TouchableHighlight>

          <Text style={localStyles.titleText}>
          Advanced
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Backside 360 Shuv-it
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          360 flip
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Frontside 360 shuv-it
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Laser flip
          </Text>
          </TouchableHighlight>

      </ScrollView>
        </View>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }
  

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons

  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType : UNSET
    })
  }
}

const localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = ViroSample
