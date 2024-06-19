import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={{display:"flex",flexDirection:"row"}}>
        <Text style={styles.firstLine}></Text>
        <Text style={{color:"#8C92AC"}}>Or continue with</Text>
        <Text style={styles.secondLine}></Text>
      </View>
      <View style={{marginTop:30,display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
        <AntDesign name="apple1" size={27} color="black" />
        <AntDesign name="google" size={27} color="black" />
        <FontAwesome5 name="facebook" size={27} color="black" />
      </View>
      <Text style={{marginTop:50,margin:"auto"}}>Haven't an account?
        <Text style={{color:"#2666CF"}}>Register</Text>
      </Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        marginLeft:20
    },
    firstLine:{
        backgroundColor: "#8C92AC",
        width:120,
        height:2,
        marginTop:7,
        marginRight: 10
    },
    secondLine:{
        backgroundColor: "#8C92AC",
        width:120,
        height:2,
        marginTop:7,
        marginLeft: 10
    }
})