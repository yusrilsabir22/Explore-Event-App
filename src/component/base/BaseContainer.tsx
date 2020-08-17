import * as React from 'react';
import { StyleProp, ViewStyle, View, StyleSheet } from "react-native";
import BaseViewModel from "./BaseViewModel";
import { colors } from '../../helpers/colors';
import HeaderType2 from '../header/header.type2';

interface ContainerProps {
    style?: StyleProp<ViewStyle>;
    viewModel: BaseViewModel;
    header?: boolean;
    headerTitle?: string;
    goBack: () => void;
}

interface ContainerState {

}

export class BaseContainer extends React.Component<ContainerProps, ContainerState> {
    private vm: BaseViewModel;

    constructor(props: any) {
        super(props);
        this.vm = this.props.viewModel;
        this.vm.container = this;
    }

    render() {
        return(
            <View style={styles.container}>
                {this.props.header ? <HeaderType2 goBack={this.props.goBack} title={this.props.headerTitle || "Event App"}/> : null}
                {this.props.children}
            </View>
        )
    }
}

export default BaseContainer;

// export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: 20,
        // margT: 20,
        // paddingBottom: 5
    }
})
// export default connect