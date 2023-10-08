import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';

const Chanel = ({ }) => {

    return (

        <View style={styles.container}>
            <View style={styles.Headers}>
                <Text style={[styles.customText, { marginTop: 5, }]}>
                    CHANEL
                </Text>
            </View>

            <ScrollView>
                <View style={styles.innerContainer0}>

                    <Image source={require('../img/cn/bigpic1.png')} style={styles.bigpic} />

                </View>
                <View style={styles.innerContainer1}>
                    <Image source={require('../img/cn/1.png')} style={styles.img} />
                    <Image source={require('../img/cn/2.png')} style={styles.img} />


                </View>
                <View style={styles.innerContainer3}>
                    <Image source={require('../img/cn/3.png')} style={styles.img} />
                    <Image source={require('../img/cn/2.png')} style={styles.img} />


                </View>


                <View style={styles.innerContainer4}>
                    <Image source={require('../img/cn/5.png')} style={styles.img} />
                    <Image source={require('../img/cn/6.png')} style={styles.img} />

                </View>
                <View style={styles.innerContainer0}>

                    <Image source={require('../img/cn/bigpic3.png')} style={styles.bigpic} />

                </View>
                <View style={styles.innerContainer5}>
                    <Image source={require('../img/cn/7.png')} style={styles.img} />
                    <Image source={require('../img/cn/8.png')} style={styles.img} />


                </View>
                <View style={styles.innerContainer7}>
                    <Image source={require('../img/cn/9.png')} style={styles.img} />
                    <Image source={require('../img/cn/10.png')} style={styles.img} />


                </View>
                <View style={styles.innerContainer8}>
                    <Image source={require('../img/cn/11.png')} style={styles.img} />
                    <Image source={require('../img/cn/white.png')} style={styles.img} />


                </View>

            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    innerContainer: {
        flexDirection: 'row',

    },
    innerContainer0: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        height: 200,
        width: 500,
        alignItems: 'center',
    },
    bigpic: {

        height: 200,
        width: 412,
    },
    innerContainer1: {
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 0,
        alignItems: 'center',
        borderRadius: 10,
    },
    innerContainer2: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        height: 200,
        width: 500,
        alignItems: 'center',
    },
    innerContainer3: {
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center',
        borderRadius: 10,
    },
    innerContainer4: {
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center',
        borderRadius: 10,
    },
    innerContainer5: {
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center',
        borderRadius: 10,
    },
    innerContainer6: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        height: 200,
        width: 500,
        alignItems: 'center',
    },
    innerContainer7: {
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center',
        borderRadius: 10,
    },
    innerContainer8: {
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center',
        borderRadius: 10,
    },

    //รูปน้ำหอมช่องเล็ก
    img: {
        borderRadius: 4,
        margin: 10,
        height: 256.084,
        width: 181.04,
        backgroundColor: 'white'
    },

    Headers: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    customText: {
        fontSize: 40,
        color: 'black',
        fontFamily: 'Pridi-Bold',
    },


});

export default Chanel;