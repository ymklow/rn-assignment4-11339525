import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const DisplayName = ({userName,email}) => {
  const router = useRouter()
  return (
    <View style={styles.header}>
      <View>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.headerText}>{userName ? userName:"Login to display name"}</Text>
          { !userName ? 
          (<TouchableOpacity style={styles.logInBtn} onPress={()=>router.push('/login')}>
            <Text style={{color:"#FFFFFF",textAlign:"center",fontSize: 17}}>Log In</Text>
          </TouchableOpacity>
          ):""
          }
        </View>
        <Text style={styles.subHeaderText}>{email ? email : "example@gmail.com"}</Text>
      </View>
      <View style={styles.redText}>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 25,
    color: "#8C92AC"
  },
  redText: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 50,
  },
  logInBtn: {
    marginLeft: 8,
    backgroundColor:"#2666CF",
    padding:8,
    borderRadius: 8,
    width: 100
  }
});

export default DisplayName;