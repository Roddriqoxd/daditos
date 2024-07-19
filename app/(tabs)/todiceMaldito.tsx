import { StyleSheet, View, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Dados from '../componentes/dados';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { cambiarAleatoriamente } from '../../redux/feactures/dados'

export default function TodiseMaldito() {

  const dispatch = useAppDispatch()
  const counter = useAppSelector(state => state.contador.numero)


  function getRandomOneOrTwo() {
    dispatch(cambiarAleatoriamente())
  }


  return (

    <View style={styles.container}>
      <ThemedText type="defaultSemiBold">{counter}</ThemedText>
      <Dados dados={counter} />
      <Button
        title='cambiar'
        onPress={getRandomOneOrTwo}
      />
    </View>

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
