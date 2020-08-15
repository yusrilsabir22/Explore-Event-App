import * as React from 'react'
import BaseComponent from '../../component/base/BaseComponent';
import { ScrollView, Text } from 'react-native';
import EventViewModel, { EventProps, EventState } from './EventViewModel';
import BaseContainer from '../../component/base/BaseContainer';

export default class Home extends BaseComponent<EventProps, EventState, EventViewModel> {
    constructor(props: any) {
        super(props, EventViewModel);
    }

    render() {
        return <BaseContainer
            viewModel={this.vm}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 30, paddingBottom: 20 }}>
                <Text>Hello World</Text>
            </ScrollView>
        </BaseContainer>
    }
}