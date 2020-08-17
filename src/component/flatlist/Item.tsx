import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { HomeStackScreenNavigationProp, RootScreenProps } from '../../config/navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';



const {width, height} = Dimensions.get("window");
interface ItemProps {
    image: string;
    title: string;
    id: number;
    date: string;
    index: number,
    navigation?: RootScreenProps
}

interface ItemState {

}

export default class Item extends PureComponent<ItemProps, ItemState> {

    navigate() {
        // console.log(this.props)
        this.props.navigation?.navigate("Event");
    }

    render() {
        const {image, title, id, date, index, navigation} = this.props
        return (
            <TouchableOpacity style={styles.container} key={index} onPress={this.navigate.bind(this)}>
                <Image
                    source={{
                        uri: image
                    }}
                    style={styles.image}
                />
                <View style={styles.txtContainer}>
                    <Text style={styles.txt1}>{title}</Text>
                    <Text style={styles.txt2}>{date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: width - 75,
        height: height / 3,
        position: 'relative'
    },
    image: {
        width: width - 100,
        height: "100%",
        resizeMode: "cover",
        borderRadius: 20
    },
    txtContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    txt1: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18
    },
    txt2: {
        color: "#ffffff"
    }
})