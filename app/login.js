import { SafeAreaView, StyleSheet } from 'react-native'
import Welcome from '../components/Welcome'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'

const login = () => {
  return (
     <SafeAreaView style={styles.container}>
        <Welcome/>
        <LoginForm/>
        <Footer/>
     </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
   }
})