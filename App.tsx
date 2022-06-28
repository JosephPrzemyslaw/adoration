import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { LeafletView } from 'react-native-leaflet-view';
import Geolocation from 'react-native-geolocation-service';

function onMessageReceived(msg) {
 // console.log(`${JSON.stringify(msg)}`)
}

const App = () => {
  useEffect(() => {
    const hasLocationPermission = true;
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
          (position) => {
            console.log("Position: ", position);
          },
          (error) => {
            // See error code charts below.
            console.log("Error: ", error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
        <LeafletView onMessageReceived={onMessageReceived}
              // The rest of your props, see the list below
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
