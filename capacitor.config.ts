import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'appmairanni.iti.prueba',
  appName: 'appmairanni',
  webDir: 'www',
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    OneSignal: {
      appId: 'e4f302e9-b385-4905-a3c9-afe5aa20bdb6',
    },
  },
  
};

export default config;
