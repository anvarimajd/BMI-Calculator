import { StyleSheet, View } from 'react-native';
import  Main  from '/components/Main';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'flex-start',
  },
});