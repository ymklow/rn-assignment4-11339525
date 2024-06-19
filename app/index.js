import { SafeAreaView, StyleSheet } from 'react-native'
import DisplayName from '../components/DisplayName'
import SearchBar from '../components/SearchBar'
import FeaturedJobs from '../components/FeaturedJobs'
import PopularJobs from '../components/PopularJobs'
import { useLocalSearchParams } from 'expo-router'

const Home = () => {
  const { userName,email } = useLocalSearchParams()
  return (
     <SafeAreaView style={styles.container}>
        <DisplayName userName={userName} email={email}/>
        <SearchBar/>
        <FeaturedJobs/>
        <PopularJobs/>
     </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
})