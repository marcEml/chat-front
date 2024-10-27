import { useEffect, useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function useLoadResources() {
  const [fontsLoaded] = useFonts({
    'TWKLausanne-200': require('../assets/fonts/TWKLausanne-200.ttf'),
    'TWKLausanne-300': require('../assets/fonts/TWKLausanne-300.ttf'),
    'TWKLausanne-400': require('../assets/fonts/TWKLausanne-400.ttf'),
    'TWKLausanne-500': require('../assets/fonts/TWKLausanne-500.ttf'),
    'TWKLausanne-600': require('../assets/fonts/TWKLausanne-600.ttf'),
    'TWKLausanne-700': require('../assets/fonts/TWKLausanne-700.ttf'),
    'TWKLausanne-600-italic': require('../assets/fonts/TWKLausanne-600Italic.ttf'),
    'TWKLausanne-700-italic': require('../assets/fonts/TWKLausanne-700Italic.ttf'),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          setIsReady(true);
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  return { isReady, onLayoutRootView };
}
