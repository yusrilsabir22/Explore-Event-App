import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BaseComponent from '../../component/base/BaseComponent'
import MessageViewModel, { MessageProps, MessageState } from './MessageViewModel'
import BaseContainer from '../../component/base/BaseContainer'

export default class Message extends BaseComponent<MessageProps, MessageState, MessageViewModel> {

    constructor(props: MessageProps) {
        super(props, MessageViewModel);
    }

    render() {
        return (
            <BaseContainer viewModel={this.vm}>
                <Text> Message </Text>
            </BaseContainer>
        )
    }
}
