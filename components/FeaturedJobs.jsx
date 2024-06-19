import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const FeaturedJobs = () => {

  const featuredJobs = [
    {
      companyName: "Facebook",
      job: "Software Engineer",
      salary: "$180,000",
      location: "Accra, Ghana"
    },
    {
      companyName: "Google",
      job: "Frontend Developer",
      salary: "$160,000",
      location: "Texas, USA"
    },
    {
      companyName: "Amazon",
      job: "Sales Man",
      salary: "$200,000",
      location: "Alabama, USA"
    },
    {
    companyName: "Sky's Multimedia",
    job: "Owner",
    salary: "$600,000",
    location: "Accra, Ghana"
  },
    {
      companyName: "Bessie's Nutrix",
      job: "CEO",
      salary: "$400,000",
      location: "Accra, Ghana"
    }
  ];

  const jobIcons = {
    "Software Engineer": "facebook",
    "Frontend Developer": "google",
    "Sales Man": "amazon",
    "Owner":"camera",
    "CEO":"heartbeat"
  };

  const jobColors = {
    "Software Engineer": "#4c669f",
    "Frontend Developer": "#ff7e5f",
    "Sales Man": "#43cea2",
    "Owner":"#92f",
    "CEO":"#4CAF50"
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Jobs</Text>
        <Text style={styles.subTitle}>See all</Text>
      </View>
      <FlatList 
        data={featuredJobs}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.featuredJobContainer,
              { backgroundColor: jobColors[item.job] }, 
              index > 0 && styles.additionalStyle,
            ]}
          >
            <View style={styles.firstSection}>
              <View style={styles.iconBox}>
                <FontAwesome5 name={jobIcons[item.job]} size={24} color="#2666CF" />
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
  );
}

export default FeaturedJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "#1F305E",
    fontWeight: "bold",
    fontSize: 17
  },
  subTitle: {
    color: "#8C92AC"
  },
  featuredJobContainer: {
    width: 300,
    borderRadius: 15,
    marginTop: 15,
    padding: 15, // Added padding to ensure content is not touching edges
  },
  additionalStyle: {
    marginLeft: 20
  },
  firstSection: {
    flexDirection: "row",
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  secondSectionTextTwo: {
    color: "#fff",
    marginTop: 5
  },
  thirdSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 100 // Reduced margin to adjust for padding
  }
});
