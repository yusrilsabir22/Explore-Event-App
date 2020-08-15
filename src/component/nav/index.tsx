import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../helpers/colors';

type Props = {
    focused: boolean;
    name: string,
    badge?: string | number | undefined;
    solid?: boolean;
}
export default class TabBarIcon extends PureComponent<Props> {
    render() {
        const {focused,name, badge, solid} = this.props;
        return (
            <View style={{ position: "relative" }}>
                <FontAwesome5Icon solid={solid} name={name} color={focused ? colors.GREEN : colors.GREY} size={18} />
                {
                    focused ?
                        <FontAwesome5Icon style={{ textAlign: "center", position: "absolute", left: 0, right: 0, top: 20, fontSize: 10 }} name="minus" color={colors.GREEN} size={18} />
                        : null
                }
                {
                    badge ?
                    <View style={{
                        backgroundColor: colors.GREEN,
                        width: 15,
                        height: 15,
                        borderRadius: 15/2,
                        position: "absolute",
                        bottom: 10,
                        left: 13
                    }}>
                        <Text style={{textAlign:"center" ,fontSize: 10, color: "#FFFFFF"}}>2</Text>
                    </View> : null

                }
            </View>
        )
    }
}
