import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';

const FeaturedJobs = () => {
    const featuredJobs = [
        {
           companyName: "Facebook",
           job: "Software Engineer",
           salary: "$180,000",
           location: "Accra,Ghana"
        },
        {
            companyName: "Google",
            job: "Frontend Developer",
            salary: "$160,000",
            location: "Texax,USA"
         },
         {
            companyName: "Amazon",
            job: "Sales Man",
            salary: "$200,000",
            location: "Alabama,USA"
         }
        ]
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <Text style={styles.title}>Featured Jobs</Text>
         <Text style={styles.subTitle}>See all</Text>
      </View>
      <FlatList 
      data={featuredJobs}
      renderItem={({ item,index })=>(
          <View style={[
            styles.featuredJobContainer,
            index > 0 && styles.additionalStyle,]}>
             <View style={styles.firstSection}>
                <View style={styles.iconBox}>
                 <FontAwesome6 name="facebook" size={24} color="#2666CF" />
                </View>
               <View style={styles.secondSection}>
                 <Text style={styles.secondSectionTextOne}>{item.job}</Text>
                 <Text style={styles.secondSectionTextTwo}>{item.companyName}</Text>
               </View>
             </View>
             <View style={styles.thirdSection}>
                <Text style={{color:"#000"}}>{item.salary}</Text>
                <Text style={{color:"#000"}}>{item.location}</Text>
             </View>
          </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default FeaturedJobs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15,
        paddingHorizontal: 20
    },
    title: {
      color:"#1F305E",
      fontWeight:"bold",
      fontSize:17
    },
    subTitle: {
        color: "#8C92AC"
    },
    featuredJobContainer: {
        backgroundColor: "#F5F5F5",
        width:300,
        borderRadius:15,
        marginTop:15,
    },
    additionalStyle: {
      marginLeft:20
    },
    firstSection: {
        flexDirection: "row",
        padding:15
    },
    iconBox: {
        backgroundColor: "#FFFFFF",
        padding: 7,
        borderRadius: 10
    },
    secondSection: {
        marginLeft: 10
    },
    secondSectionTextOne: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold"
    },
    secondSectionTextTwo: {
        color: "#000",
        marginTop:5
    },
    thirdSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal:10,
        marginTop: 90
    }
})