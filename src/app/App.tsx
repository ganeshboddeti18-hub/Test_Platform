import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { theme } from '../shared/ui/theme';
import { AppNavigator } from '../navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <AppNavigator />
    </GestureHandlerRootView>
  );
}

export default App;
