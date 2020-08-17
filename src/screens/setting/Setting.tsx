import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BaseComponent from '../../component/base/BaseComponent'
import SettingViewModel, { SettingProps, SettingState } from './SettingViewModel'
import BaseContainer from '../../component/base/BaseContainer'

export default class Setting extends BaseComponent<SettingProps, SettingState, SettingViewModel> {

    constructor(props: SettingProps) {
        super(props, SettingViewModel);
    }

    render() {
        return (
            <BaseContainer viewModel={this.vm}>
                <Text> Setting </Text>
            </BaseContainer>
        )
    }
}
