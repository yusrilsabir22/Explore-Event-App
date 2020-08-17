import React, { PureComponent } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

type HeaderProps = {
    title: string;
    goBack: () => void;
}

export default class HeaderType2 extends PureComponent<HeaderProps> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.goBack()}>
                    <FontAwesome5Icon size={20} name="chevron-left" />
                </TouchableOpacity>
                <Text style={{fontSize: 18}}>{this.props.title}</Text>
                <TouchableOpacity style={{flexDirection: "row"}}>
                    <FontAwesome5Icon name="circle" solid style={{marginHorizontal: 5}} size={6} />
                    <FontAwesome5Icon name="circle" solid style={{marginHorizontal: 5}} size={6} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20
    }
})