import { StyleSheet, Text, View } from 'react-native'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View>
         <Text style={{fontWeight:"bold",color:"#0070BB",fontSize:25}}>Jobizz</Text>
      </View>
      <View style={{marginTop:10}}>
         <Text style={{fontSize:30,fontWeight:600}}>Welcome Back 👋</Text>
      </View>
      <View style={{marginTop:12}}>
         <Text style={{color:"#8C92AC"}}>Let's log in. Apply to jobs!</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
      padding: 25
    }
})