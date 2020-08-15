import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { colors } from '../../helpers/colors'
import HeadCard from '../flatlist/HeadCard'
const dimens = Dimensions.get("window")

export default class CardType2 extends React.PureComponent {
    render() {
        return (
            <View style={styles.con}>
                <HeadCard title="My Event"/>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: "https://e7.pngegg.com/pngimages/834/109/png-clipart-mt-fuji-illustration-mount-fuji-tokyo-poster-japanese-mountain-triangle-vertebrate.png"
                            }}
                            style={{
                                height: 50,
                                width: 50,
                                aspectRatio: 1,
                                resizeMode: "contain",

                            }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Fri, 14 August</Text>
                        <Text style={styles.text2}>UI/UX Design</Text>
                        <Text style={styles.text2}>Bootcamp</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    con: {
        marginVertical: 35,
    },
    container: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#ebebeb",
        borderLeftColor: "#ebebeb",
        borderLeftWidth: 1,
        borderRightColor: "#ebebeb",
        borderRightWidth: 2
    },
    imageContainer: {
        flex: 1,
        borderRadius: 80,
        width: "30%",
        // marg: 20,
        // height: 110,
        justifyContent: "center",
        // padding: 50,
        // paddingLeft: 22.5,
        alignItems: 'flex-start',
        // marginHorizontal: 20
    },
    textContainer: {
        marginHorizontal: 10,
        width: "85%",
        paddingHorizontal: 20,
        // justifyContent: "center",
        // alignContent: 'flex-start',
    },
    text: {
        fontSize: 14,
        color: colors.PINK
    },
    text2: {
        color: colors.BLACK1,
        fontSize: 18,
        fontWeight: "bold"
    }
})
