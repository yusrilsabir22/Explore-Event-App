import { EmitterSubscription, Keyboard } from "react-native";
import { BaseContainer } from "./BaseContainer";
import { RootScreenProps, HomeStackScreenRouteProp } from "../../config/navigation";

export interface IBasePresenter<P, S> {
    [x: string]: any;
    setState<K extends keyof S>(
        state:
            | ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null)
            | (Pick<S, K> | S | null),
        cb?: () => void,
    ): void;

    getProps(): P;

    getStates(): S;
}

export interface BaseProps {
    navigation: RootScreenProps;
}

export interface BaseState {
    isKeyboardShow?: boolean;
}

export default abstract class BaseViewModel<P = {}, S={}> {
    protected presenter!: IBasePresenter<P, S>;
    private KeyboardWillShowListener!: EmitterSubscription;
    private KeyboardDidShowListener!: EmitterSubscription;
    private KeyboardWillHideListener!: EmitterSubscription;
    private KeyboardDidHideListener!: EmitterSubscription;
    public state!: Readonly<S>;
    public container!: BaseContainer;

    constructor(props: any) {}

    setState<K extends keyof S>(
        state:
            | ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null)
            | (Pick<S, K> | S | null),
        callback?: () => void
    ): void {
        this.presenter.setState(state, callback);
    }

    public getProps(): P {
        return this.presenter.getProps();
    }

    public getState(): S {
        return this.presenter.getState();
    }

    setPresenter(pr: IBasePresenter<P, S>) {
        this.presenter = pr;
    }

    // @ts-ignore
    keyboardDidShow = e => {};

    // @ts-ignore
    keyboardWillShow = e => {};

    keyboardDidHide = () => {};

    keyboardWillHide = () => {};

    componentDidMount() {
        this.KeyboardWillHideListener = Keyboard.addListener('keyboardWillHide',  this.keyboardWillHide);

        this.KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);

        this.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);

        this.KeyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    }

    componentWillUnmount() {
        this.KeyboardDidHideListener  && this.KeyboardDidHideListener.remove();
        this.KeyboardWillHideListener && this.KeyboardWillHideListener.remove();
        this.KeyboardDidShowListener && this.KeyboardDidShowListener.remove();
        this.KeyboardWillShowListener && this.KeyboardWillShowListener.remove();
    }
}