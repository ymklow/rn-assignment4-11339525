import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'

const loginForm = () => {
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const router = useRouter()

    const passData = () =>{
       if(email === "" || userName === "") {
        alert("Enter your name and email")
        return
       }
       router.push({pathname:'/',params:{
        userName:userName,
        email:email
       }})
    }
  return (
    <View style={styles.container}>
        <View>
           <TextInput style={styles.textInput} 
           placeholder='Name'
           value={userName}
           onChangeText={setUserName}
           placeholderTextColor="#8C92AC"
           />
        </View>
        <View style={{marginTop:25}}>
           <TextInput style={styles.textInput} 
           placeholder='Email'
           value={email}
           onChangeText={setEmail}
           placeholderTextColor="#8C92AC"
           />
        </View>
        <TouchableOpacity style={styles.logInBtn} onPress={()=>passData()}>
            <Text style={{textAlign:"center",color:"#FFFFFF",fontSize:20}}>Log in</Text>
        </TouchableOpacity>
    </View>
  )
}

export default loginForm

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        width:360,
        height: 320,
        marginLeft:20
    },
    textInput: {
       borderWidth:1,
       borderColor:"#8C92AC",
       borderRadius:10,
       padding:20,
       color: "#000",
       placeholderTextColor: "#8C92AC",
    },
    logInBtn: {
        marginTop: 25,
        backgroundColor: "#2666CF",
        padding:22,
        borderRadius: 8
    }
})