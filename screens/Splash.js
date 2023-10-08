import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Splash = ({ navigation }) => {
  const onPress1 = () => {
    navigation.navigate('Dior')
  };
  const onPress2 = () => {
    navigation.navigate('Jomalone')
  };
  const onPress3 = () => {
    navigation.navigate('Chanel')
  };
  const onPress4 = () => {
    navigation.navigate('CalvinKlein')
  };
  const onPress5 = () => {
    navigation.navigate('Zara')
  };
  return (
    <View style={styles.container}>
      <View style={styles.Headers}>
        <Text style={[styles.customText, { marginTop: 5, }]}>
        AURA
        </Text>
      </View>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={[styles.customText2, { marginTop: 20, }]}>
            MAXTERPUMP.co
          </Text>
        </View>

        <View style={styles.innerContainer0}>
          <Pressable onPress={onPress1}>
            <Image source={require('../img/02.jpg')} style={styles.bigpic} />

          </Pressable>
        </View>
        <View style={styles.innerContainer1}>
          <Pressable onPress={onPress2}>
            <Image source={require('../img/03.png')} style={styles.bigpic2} />
          </Pressable>
        </View>

        <View style={styles.innerContainer2}>
          <Pressable onPress={onPress3}>
            <Image source={require('../img/cn/bigpic2.png')} style={styles.bigpic3} />
          </Pressable>

        </View>

        <View style={styles.innerContainer3}>
          <Pressable onPress={onPress4}>
            <Image source={require('../img/ck/bigpic1.png')} style={styles.bigpic4} />
          </Pressable>

        </View>
        <View style={styles.innerContainer4}>
          <Pressable onPress={onPress5}>
            <Image source={require('../img/zr/bigpic1.png')} style={styles.bigpic5} />
          </Pressable>

        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: 20,
  },
  Headers: {
    justifyContent: 'center',
    alignItems: 'left',

  },

  customText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Pridi-Bold',
  },
  customText2: {

    paddingRight: 50,
    fontSize: 12,
    color: 'white',
    fontFamily: 'FC Unique',
    textAlign: 'center',
  },
  innerContainer: {

  },
  innerContainer0: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 10,
    height: 200,
    width: 450,
    alignItems: 'center',
  },
  innerContainer1: {
    paddingTop: 50,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer2 :{
    paddingTop: 50,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer3:{
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer4: {
      paddingTop: 10,
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
    
  },
  bigpic2: {

    height: 220,
    width: 387,
  },
  bigpic: {

    height: 200,
    width: 395,
  },
  bigpic3:{
    height: 220,
    width: 387,
  },
  bigpic4: {
    height: 155,
    width: 387,
  },
  bigpic5: {
    height: 220,
    width: 387,
  }
}
);

export default Splash