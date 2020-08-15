import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../helpers/colors'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

interface HeadCardProps {
    title: string;
}

export default class HeadCard extends PureComponent<HeadCardProps> {
    render() {
        return (
            <View style={styles.headContainer}>
                <Text style={styles.headTxt1}>{this.props.title}</Text>
                <TouchableOpacity style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}} onPress={() => {}}>
                    <Text style={styles.headTxt2}>View All</Text>
                    <FontAwesome5Icon style={styles.icon} name={'chevron-right'} color={colors.WHITE} size={10} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10
    },
    headTxt1: {
        fontWeight: "bold",
        fontSize: 16
    },
    headTxt2: {
        color: colors.GREEN
    },
    icon: {
        marginLeft: 7, 
        backgroundColor: colors.GREEN, 
        paddingHorizontal: 5, 
        paddingVertical: 4, 
        borderRadius: 4.5
    }
})