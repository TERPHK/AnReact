import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';

const Jomalone = ({ }) => {

    return (

        <View style={styles.container}>
            <View style={styles.Headers}>
                <Text style={[styles.customText, { marginTop: 5, }]}>
                    JO MALONE
                </Text>

            </View>

            <ScrollView>
                <View style={styles.innerContainer0}>
                    <Image source={require('../img/jm/bigpic.png')} style={styles.bigpic} />
                </View>
                <View style={styles.innerContainer1}>
                    <Image source={require('../img/jm/pg1.png')} style={styles.img} />
                    <Image source={require('../img/jm/pg2.png')} style={styles.img} />


                </View>
                <View style={styles.innerContainer1}>
                    <Image source={require('../img/jm/pg3.png')} style={styles.img} />
                    <Image source={require('../img/jm/pg4.png')} style={styles.img} />


                </View>

                <View style={styles.innerContainer1}>
                    <Image source={require('../img/jm/pg5.png')} style={styles.img} />
                    <Image source={require('../img/jm/pg6.png')} style={styles.img} />


                </View>
                <View style={styles.innerContainer1}>
                    <Image source={require('../img/jm/pg7.png')} style={styles.img} />
                    <Image source={require('../img/jm/pg8.png')} style={styles.img} />


                </View>

                <View style={styles.innerContainer1}>
                    <Image source={require('../img/jm/pg9.png')} style={styles.img} />
                    <Image source={require('../img/jm/pg10.png')} style={styles.img} />


                </View>
                <View style={styles.innerContainer1}>
                    <Image source={require('../img/jm/pg11.png')} style={styles.img} />
                    <Image source={require('../img/jm/pg12.png')} style={styles.img} />


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
        width: 50,
        alignItems: 'center',
    },
    

    //รูปน้ำหอมช่องเล็ก
    img: {
        borderRadius: 4,
        margin: 10,
        height: 300,
        width: 182,
        backgroundColor: 'white'
    },

    Headers: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    customText: {
        fontSize: 40,
        color: 'black',
        fontFamily: 'Righteous',
    },


});

export default Jomalone;