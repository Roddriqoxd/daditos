import { Retos } from '@/redux/intefaces/retos';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { editar } from '../../redux/feactures/editar';
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import React, { useState } from 'react';

export default function TabTwoScreen() {

  // function xxx(){
  //   alert('sss')
  // }

  // let retos: Retos;

  const retos= useAppSelector(state => state.retos)
  let retosNuevos: Retos;
  const dispatch = useAppDispatch()

  const [dos, setDos] = useState(retos.dos);
  const [tres, setTres] = useState(retos.tres);
   const [cuatro, setCuatro] = useState(retos.cuatro);
   const [cinco, setCinco] = useState(retos.cinco);
  const [seis, setSeis] = useState(retos.seis);
   const [siete, setSiete] = useState(retos.siete);
   const [ocho, setOcho] = useState(retos.ocho);
   const [nueve, setNueve] = useState(retos.nueve);
   const [diez, setDiez] = useState(retos.diez);
  const [once, setOnce] = useState(retos.once);
   const [doce, setDoce] = useState(retos.doce);


  function guardarDatos(){
    retosNuevos = {
      dos: dos,
      tres: tres,
      cuatro: cuatro,
      cinco: cinco,
      seis: seis,
      siete: siete,
      ocho: ocho,
      nueve: nueve,
      diez: diez,
      once: once,
      doce: doce
    }
     
    dispatch(editar(retosNuevos))

  }

  return (
    <View style={styles.container}>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{2}</Text>
        <TextInput
          style={styles.input}
          value={dos}
          onChangeText={setDos}
        />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.text}>{3}</Text>
        <TextInput
          style={styles.input}
          value={tres}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{4}</Text>
        <TextInput
          style={styles.input}
          value={retos.cuatro}
          onChangeText={setCuatro}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{5}</Text>
        <TextInput
          style={styles.input}
          value={cinco}
          onChangeText={setCinco}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{6}</Text>
        <TextInput
          style={styles.input}
          value={seis}
          onChangeText={setSeis}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{7}</Text>
        <TextInput
          style={styles.input}
          value={siete}
          onChangeText={setSiete}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{8}</Text>
        <TextInput
          style={styles.input}
          value={ocho}
          onChangeText={setOcho}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{9}</Text>
        <TextInput
          style={styles.input}
          value={nueve}
          onChangeText={setNueve}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{10}</Text>
        <TextInput
          style={styles.input}
          value={diez}
          onChangeText={setDiez}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{11}</Text>
        <TextInput
          style={styles.input}
          value={once}
          onChangeText={setOnce}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.text}>{12}</Text>
        <TextInput
          style={styles.input}
          value={doce}
          onChangeText={setDoce}
        />
      </View>
      <View style={styles.botones}>
        <Button color={'green'} title="Guardar" onPress={()=> guardarDatos()} />
        <Button color={'red'} title="Cancelar" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 270,
  },
  botones: {
    display: 'flex',
    flexDirection: "row",
    gap: 30
  },
  contenedor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  text: {
    backgroundColor: 'black',
    padding: 10,
    color: '#fff',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
});



