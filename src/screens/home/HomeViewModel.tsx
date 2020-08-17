import { RootScreenNavigationProp, RootScreenRouteProp, HomeStackScreenNavigationProp, HomeStackScreenRouteProp } from "../../config/navigation";
import BaseViewModel, { BaseProps } from "../../component/base/BaseViewModel";

export interface HomeProps extends BaseProps {
    route?: HomeStackScreenRouteProp;
}

export interface HomeState {

}

export default class HomeViewModel extends BaseViewModel<HomeProps, HomeState> {
    constructor(props: any) {
        super(props);
    }
}