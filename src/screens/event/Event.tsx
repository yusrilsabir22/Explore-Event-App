import * as React from 'react'
import BaseComponent from '../../component/base/BaseComponent';
import { ScrollView, Text, StyleSheet } from 'react-native';
import EventViewModel, { EventProps, EventState } from './EventViewModel';
import BaseContainer from '../../component/base/BaseContainer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../helpers/colors';
export default class Event extends BaseComponent<EventProps, EventState, EventViewModel> {
    constructor(props: any) {
        super(props, EventViewModel);
    }

    render() {
        return <BaseContainer
            viewModel={this.vm}
            header={true}
            headerTitle={"Details"}
            goBack={this.props.navigation.goBack}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 30, paddingBottom: 20 }}>
                <TouchableOpacity onPress={(e) => {
                    this.props.navigation.navigate("Search")
                }}>
                    <Text style={styles.textHeader}>Hiking In Mount Everest for Climber Enthusiasts</Text>
                    <Text style={styles.headerDescription}>Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas...</Text>
                </TouchableOpacity>
            </ScrollView>
        </BaseContainer>
    }
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 28,
        fontWeight: "bold"
    },
    headerDescription: {
        marginTop: 20,
        color: colors.GREY2,
        fontSize: 16
    }
})