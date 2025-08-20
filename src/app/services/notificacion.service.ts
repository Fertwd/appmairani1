import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import OneSignal from 'onesignal-cordova-plugin'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  init(){

    const isPushNotificationsAvailable = Capacitor.
    isPluginAvailable('PushNotifications');

    if (isPushNotificationsAvailable) {
      PushNotifications.requestPermissions().then( (result)) => {
        if(result.receive){
          OneSignal.initialize(environment.OneSignalID)

            OneSignal.notifications.addEventListener('click')
        }
      }
    }
  }
}
