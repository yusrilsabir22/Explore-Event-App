import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BaseComponent from '../../component/base/BaseComponent'
import SearchViewModel, { SearchProps, SearchState } from './SearchViewModel'
import BaseContainer from '../../component/base/BaseContainer'

export default class Search extends BaseComponent<SearchProps, SearchState, SearchViewModel> {

    constructor(props: SearchProps) {
        super(props, SearchViewModel);
    }

    render() {
        return (
            <BaseContainer viewModel={this.vm}>
                <Text> Search </Text>
            </BaseContainer>
        )
    }
}