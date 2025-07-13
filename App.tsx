import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { myStore, persistedStore } from './src/redux/store/myStore';
import AppNavigator from './src/navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={myStore}>
      <PersistGate persistor={persistedStore}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
