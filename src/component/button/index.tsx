import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../helpers/colors';

interface ButtonPropsc {
    title: string;
    activeOpacity?: number;
    onPress: (e: any) => void;
    buttonColor?: string;
    titleColor?: string;
}

interface ButtonState {

}

export default class Button extends React.PureComponent<ButtonPropsc, ButtonState> {

    render() {
        return (
            <TouchableOpacity 
            activeOpacity={this.props.activeOpacity || 0.78} 
            style={{
                backgroundColor: this.props.buttonColor ? this.props.buttonColor : colors.BLUE
            }}
            onPress={this.props.onPress}>
                <Text style={{
                    color: colors.BLACK
                }}> {this.props.title} </Text>
            </TouchableOpacity>
        )
    }
}