import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';


const PopularJobs = () => {
    const popularJobs = [
        {
          job: "Jr Executive",
          companyName: "Burger King",
          salary: "$96,000",
          location: "Los Angeles,US"
        },
        {
            job: "Product Manager",
            companyName: "Beats",
            salary: "$84,000",
            location: "Florida,US"
        },
        {
            job: "Product Manager",
            companyName: "Facebook",
            salary: "$86,000",
            location: "Florida,US"
        }
    ]
  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <Text style={styles.title}>Popular Jobs</Text>
         <Text style={styles.subTitle}>See All</Text>
        </View>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.firstSection}>
              <FontAwesome6 name="facebook" size={40} color="#2666CF" /> 
              <View style={{marginLeft:8}}>
                <Text style={styles.JobText}>{item.job}</Text>
                <Text style={{color:"#8C92AC",marginTop:10}}>{item.companyName}</Text>
              </View> 
            </View>
            <View>
              <Text>{item.salary}/y</Text>
              <Text style={{color:"#8C92AC",marginTop:10}}>{item.location}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color:"#1F305E",
    fontWeight:"bold",
    fontSize:17
  },
  subTitle: {
      color: "#8C92AC"
  },
  card: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    marginTop:30,
    marginBottom: 5,
    justifyContent: "space-between",
    paddingLeft: 20,
    padding:20
  },
  firstSection: {
    flexDirection: "row"
  },
  JobText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
});

export default PopularJobs;