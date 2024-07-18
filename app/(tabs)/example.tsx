import { Image, StyleSheet, Platform, View, Button } from 'react-native';
import Svg, { Ellipse, Path, Rect } from "react-native-svg"
import * as Animatable from "react-native-animatable";
import {useRef} from 'react';

let xxx = getRandomOneOrTwo()

function getRandomOneOrTwo() {
  return Math.floor(Math.random() * 2) + 1;
}

  function cambiar(){
    xxx = 2;
  }
  
export default function Example() {



  if(xxx === 1){
    return (
      <View style={styles.container}>
  
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
        <View style={styles.botones}>
        <Button color={'black'} title={xxx.toString()} onPress={cambiar} />
        </View>
      </View>
    );
  } else if(xxx === 2) {
    return (
      <View style={styles.container}>
  
        <Animatable.View animation="bounceInDown">
        <Svg
                width={120}
                height={120}
                viewBox="0 0 1000 1000"
                fill="none"
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff"/>
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000"/>
                <Path
                    d="M581 500.5c0 42.802-36.265 77.5-81 77.5s-81-34.698-81-77.5 36.265-77.5 81-77.5 81 34.698 81 77.5z"
                    fill="#000"
                />
            </Svg>
        </Animatable.View>

        
   
        <View style={styles.botones}>
        <Button color={'black'} title={xxx.toString()} onPress={cambiar} />
        </View>
      </View>
    );
  }



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
