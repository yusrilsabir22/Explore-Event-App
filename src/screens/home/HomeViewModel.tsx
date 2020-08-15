import { RootScreenNavigationProp, RootScreenRouteProp, HomeStackScreenNavigationProp, HomeStackScreenRouteProp } from "../../config/navigation";
import BaseViewModel from "../../component/base/BaseViewModel";

export interface HomeProps {
    navigation?: HomeStackScreenNavigationProp;
    route?: HomeStackScreenRouteProp;
}

export interface HomeState {

}

export default class HomeViewModel extends BaseViewModel<HomeProps, HomeState> {
    constructor(props: any) {
        super(props);
    }
}