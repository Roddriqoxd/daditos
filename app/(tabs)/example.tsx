import { Image, StyleSheet, Platform, View, Button } from 'react-native';
import Svg, { Ellipse, Path, Rect } from "react-native-svg"
import * as Animatable from "react-native-animatable";
import {useRef} from 'react';
import { ThemedText } from '@/components/ThemedText';
import Dados from '../componentes/dados';
import {useAppDispatch, useAppSelector} from '../../redux/store/hooks';
import {cambiarAleatoriamente} from '../../redux/feactures/dados'
import {store} from '../../redux/store/store';
import {Provider} from 'react-redux';
// let xxx = getRandomOneOrTwo()

export default function Example() {

  const dispatch = useAppDispatch()
  const counter = useAppSelector(state => state.contador.numero)

  let numberDados: number = 1

  function getRandomOneOrTwo() {
    dispatch(cambiarAleatoriamente())
  }


  return(
    <Provider store={store}>
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold">{counter}</ThemedText>
      <Dados dados={counter} />
      <Button
      title='cambiar'
      onPress={()=>getRandomOneOrTwo}
      />
    </View>
    </Provider>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    gap: 8,
    backgroundColor: '#056E32'
  },
  botones: {
    display: 'flex',
    flexDirection: "row",
    gap: 30,
},
});
