import BaseViewModel, { BaseProps } from "../../component/base/BaseViewModel";
import { RootScreenProps, HomeStackScreenRouteProp } from "../../config/navigation";


export interface EventProps extends BaseProps {
    route: HomeStackScreenRouteProp;
} 

export type EventState = {

}

export default class EventViewModel extends BaseViewModel<EventProps, EventState> {
    constructor(props: any) {
        super(props);
    }
}