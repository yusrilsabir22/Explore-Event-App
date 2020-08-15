import React, { PureComponent } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Header extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleTxt}>Welcome back </Text>
                    <Text style={styles.nameTxt}>Sophia Kristin</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: "https://assets.kompasiana.com/items/album/2017/12/20/baby-face-5a3a1bb15e137305b6514e32.jpg",
                            width: 50,
                            height: 50
                        }}
                        style={{borderRadius: 50}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
        // paddingHorizontal: 20,
        // paddingVertical: 30
    },
    textContainer: {
    },
    imageContainer: {
        
    },
    titleTxt: {
        fontFamily: "OpenSans-Regular",
        fontSize: 16,
        color: "#919191"
    },
    nameTxt: {
        fontFamily: "OpenSans-Regular",
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 1.2
    }
})