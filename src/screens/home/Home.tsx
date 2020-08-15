import * as React from 'react'
import BaseComponent from '../../component/base/BaseComponent';
import { BaseContainer } from '../../component/base/BaseContainer';
import Header from '../../component/header/header';
import Card from '../../component/card/card';
import CardHList from '../../component/flatlist/CardHList';
import CardType2 from '../../component/card/card.type2';
import { ScrollView } from 'react-native';
import HomeViewModel, { HomeProps, HomeState } from './HomeViewModel';

export default class Home extends BaseComponent<HomeProps, HomeState, HomeViewModel> {
    constructor(props: any) {
            super(props, HomeViewModel);
    }

    render() {
       return <BaseContainer
            viewModel={this.vm}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 30, paddingBottom: 20}}>
                <Header/>
                <Card/>
                <CardHList navigation={this.props.navigation} />
                <CardType2/>
            </ScrollView>
        </BaseContainer>
    }
}