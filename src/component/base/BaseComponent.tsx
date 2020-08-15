import * as React from 'react'
import BaseViewModel, { IBasePresenter } from './BaseViewModel';
import { View, StyleSheet } from 'react-native';

// @ts-ignore
export default abstract class BaseComponent<P, S, VM
    extends BaseViewModel<P, S> = BaseViewModel<P, S>> extends React.Component<P, S>
    implements IBasePresenter<P, S> {

    public vm: VM;

    constructor(props: P, V: { new(props: any): VM } | VM) {
        super(props);

        if(typeof V === "object") {
            this.vm = V;
        } else {
            this.vm = new V(props);
        }

        this.vm.setPresenter(this);
        this.state = this.vm.state;
    }

    render() {
        return (
            <View style={styles.container}></View>
        )
    }

    public setState<K extends keyof S>(
        state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
        callback?: () => void
    ): void {
        super.setState(state, callback);
    }

    public getProps(): P {
        return this.props;
    }

    public getStates(): S {
        return this.state;
    }

    componentDidMount() {
        this.vm.componentDidMount();

    }

    componentWillUnmount() {
        this.vm.componentWillUnmount();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});