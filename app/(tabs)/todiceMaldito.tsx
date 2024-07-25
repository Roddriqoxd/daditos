import { StyleSheet, View, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Dados from '../../components/dados/dados';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { primerDado, segundoDado, limpiar } from '../../redux/feactures/dados'
import { Retos } from '@/redux/intefaces/retos';
import { numeroALetras } from '@/utils/numeroALetra';

export default function TodiseMaldito() {

  const dispatch = useAppDispatch()
  const retos: any = useAppSelector(state => state.retos)
  const dadoUno = useAppSelector(state => state.contador.dadoUno)
  const dadoDos = useAppSelector(state => state.contador.dadoDos)


  function lanzar() {
    dispatch(limpiar())
    setTimeout(() => {
      dispatch(primerDado())
      dispatch(segundoDado())
    }, 100)
  }

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">{numeroALetras(dadoDos+dadoUno, retos)}</ThemedText>
      <View style={styles.dados} onPointerDown={lanzar}>
        <Dados dados={dadoUno} />
        <Dados dados={dadoDos} />
      </View>

      <Button
        title='cambiar'
        onPress={lanzar}
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
  dados: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  botones: {
    display: 'flex',
    flexDirection: "row",
    gap: 30,
  },
});
