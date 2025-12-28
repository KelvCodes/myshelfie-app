import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedLogo from "../../components/ThemedLogo"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>

      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
})