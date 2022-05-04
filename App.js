import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from "./Component/Header/Header.js"
import CarsList from "./Component/CarsList/CarsList.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
