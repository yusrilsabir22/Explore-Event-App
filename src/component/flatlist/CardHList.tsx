import React, { PureComponent } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { fakeData } from '../../helpers/utils'
import Item from './Item'
import { colors } from '../../helpers/colors'
import HeadCard from './HeadCard';
import { HomeStackScreenNavigationProp, HomeStackScreenRouteProp } from '../../config/navigation'

type Prop = {
    navigation?: HomeStackScreenNavigationProp,
    route?: HomeStackScreenRouteProp
}
export default class CardHList extends PureComponent<Prop> {

    render() {
        return (
            <View style={styles.container}>
                <HeadCard title={"Popular Event"}/>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={fakeData}
                    renderItem={({item, index}) => <Item navigation={this.props.navigation} {...item} index={index} />}
                    style={styles.flat}
                    horizontal={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10
    },
    flat: {
        backgroundColor: colors.WHITE
    },
    headTxt1: {
        fontWeight: "bold",
        fontSize: 16
    },
    headTxt2: {
        color: colors.GREEN
    }
})