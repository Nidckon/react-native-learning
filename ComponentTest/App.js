import React from 'react';
import { CheckBox as NativeCheckBox, StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import StaticComponent from "./src/components/test/StaticComponent";
import WithParams from "./src/components/test/WithParams";
import WithContent from "./src/components/test/WithContent";

import CheckBox from './src/components/custom/CheckBox';
import InputWithLabel, { ALIGNMENT } from './src/components/complex/InputWithLabel';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false
    };
  }

  checkBox_Test = (id) => {
    this.setState((prevState) => ({
        check: !prevState.check
    }));
  };

  methodOnClick(invoked) {
    console.log(invoked);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text>Text component</Text>
        <Image
            style={styles.imageIcon}
            source={require('./assets/poker-face.jpg')}
        />
        <Button title={'Tytuł przycisku'} onPress={this.methodOnClick}/>
          <TextInput style={styles.input} />
          <NativeCheckBox
              style={styles.checkBox}
              value={this.state.check} onChange={this.checkBox_Test}/>
          <NativeCheckBox/>
        <View>
          <StaticComponent/>
          <WithParams name={'SomeName'}/>
            <WithContent>It's the content of CustomComponent with the
                <Text> TextComponent</Text>
            </WithContent>
        </View>
          <View>
              <CheckBox style={styles.checkBox}></CheckBox>
              <CheckBox></CheckBox>
          </View>
          <View>
            <InputWithLabel label={'This is a label for the input'}/>
          </View>
        </View>
          <ScrollView>
              <Text>Text component</Text>
              <Image
                  style={styles.imageIcon}
                  source={require('./assets/poker-face.jpg')}
              />
              <InputWithLabel label={'Label align LEFT'}
                              align={ALIGNMENT.LEFT}/>
              <InputWithLabel label={'Label align CENTER'}
                              align={ALIGNMENT.CENTER}/>
              <InputWithLabel label={'Label align RIGHT'}
                              align={ALIGNMENT.RIGHT}/>
              <InputWithLabel label={'Label align STRETCH'}
                              align={ALIGNMENT.STRETCH}/>
              <TextInput multiline={true}
                         style={styles.textArea} />
              <Image
                  style={styles.imageIcon}
                  source={require('./assets/poker-face.jpg')}
              />
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa',
    // alignItems: 'center',
    justifyContent: 'center',
  },
    center: {
      alignItems: 'center'
    },
    imageIcon: {
      width: 100,
        height: 100
    },
    input: {
      width: 200,
        height: 50
    },
    checkBox: {
      backgroundColor: 'red'
    },
    textArea: {
    minHeight: 300
    }
});
