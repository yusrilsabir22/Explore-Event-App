import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { colors } from '../../helpers/colors'
const dimens = Dimensions.get("window")

export default class Card extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../../assets/images/megaphone.png')}
                        style={{
                            height: (dimens.width / 5),
                            width: (dimens.height / 5),
                            borderRadius: (dimens.width / 5) / 2,
                            overflow: "hidden",
                            aspectRatio: 1,
                            // borderWidth: 3,
                            resizeMode: "contain",
                            backgroundColor: "#ffffff",
                        }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>You have {
                    (() => <Text style={{fontWeight: "bold"}}>2</Text>)()
                    } event in this month.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.PINK1,
        marginVertical: 35,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        
    },
    imageContainer: {
        flex: 1,
        // backgroundColor: "#ffffff",
        borderRadius: 80,
        width: "40%",
        // marg: 20,
        // height: 110,
        justifyContent: "center",
        // padding: 50,
        // paddingLeft: 22.5,
        alignItems: 'center',
        marginHorizontal: 20
    },
    textContainer: {
        marginHorizontal: 10,
        width: "60%",
        paddingHorizontal: 20
    },
    text: {
        fontSize: 18,
        color: colors.BLACK1
    }
})
