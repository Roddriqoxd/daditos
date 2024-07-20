import { Image, StyleSheet, Platform, View, Button } from 'react-native';
import Svg, { Ellipse, Path, Rect } from "react-native-svg"
import * as Animatable from "react-native-animatable";
import { ThemedText } from '@/components/ThemedText';
export default function Dados(props: { dados: number }) {

    let dado = props.dados

    if (dado === 1) {
        return (
            <Animatable.View animation="bounceInDown">
                <Svg
                    width={120}
                    height={120}
                    viewBox="0 0 1000 1000"
                    fill="none"
                >
                    <Rect width={1000} height={1000} rx={72} fill="#fff" />
                    <Path
                        d="M613 499.596c0 59.975-50.816 108.595-113.5 108.595S386 559.571 386 499.596C386 439.62 436.816 391 499.5 391S613 439.62 613 499.596z"
                        fill="#FF1616"
                    />
                </Svg>
            </Animatable.View>
        )
    } else if (dado === 2) {
        return (
            <Animatable.View animation="bounceInDown">
                <Svg
                    width={120}
                    height={120}
                    viewBox="0 0 1000 1000"
                    fill="none"
                >
                    <Rect width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000" />
                </Svg>
            </Animatable.View>
        )
    } else if (dado === 3) {
        return (
            <Animatable.View animation="bounceInDown">
                <Svg
                    width={120}
                    height={120}
                    viewBox="0 0 1000 1000"
                    fill="none"
                >
                    <Rect width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Path
                        d="M581 500.5c0 42.802-36.265 77.5-81 77.5s-81-34.698-81-77.5 36.265-77.5 81-77.5 81 34.698 81 77.5z"
                        fill="#000"
                    />
                </Svg>
            </Animatable.View>
        )

    } else if (dado === 4) {
        return (
            <Animatable.View animation="bounceInDown">
                <Svg
                    width={120}
                    height={120}
                    viewBox="0 0 1000 1000"
                    fill="none"
                >
                    <Rect width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={745} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={748.5} rx={81} ry={77.5} fill="#000" />
                </Svg>
            </Animatable.View>
        )

    } else if (dado === 5) {
        return (
            <Animatable.View animation="bounceInDown">
                <Svg
                    width={120}
                    height={120}
                    viewBox="0 0 1000 1000"
                    fill="none"
                >
                    <Rect width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={745} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Path
                        d="M582 500.5c0 42.802-36.265 77.5-81 77.5s-81-34.698-81-77.5 36.265-77.5 81-77.5 81 34.698 81 77.5z"
                        fill="#000"
                    />
                </Svg>
            </Animatable.View>
        )

    } else if (dado === 6) {
        return (
            <Animatable.View animation="bounceInDown">
                <Svg
                    width={120}
                    height={120}
                    viewBox="0 0 1000 1000"
                    fill="none"
                >
                    <Rect width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={745} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={745} cy={500.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={255} cy={500.5} rx={81} ry={77.5} fill="#000" />
                </Svg>
            </Animatable.View>
        )

    } else {
        return (
            <View>
                <Svg
                    width={120}
                    height={120}>
                </Svg>
            </View>
        )
    }
}