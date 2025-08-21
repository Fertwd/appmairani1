import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import OneSignal from 'onesignal-cordova-plugin';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NotificationData {
  title: string;
  message: string;
  url?: string;
  sendDate?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private http: HttpClient) {}

  init() {
    const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');

    if (isPushNotificationsAvailable) {
      PushNotifications.requestPermissions().then((result) => {
        if (result.receive) {
          OneSignal.initialize(environment.OneSignalID);

          OneSignal.Notifications.addEventListener('click', (event) => {
            console.log('Notification clicked:', event);
          });

          OneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
            console.log('Notification received in foreground:', event);
          });
        }
      }).catch((error) => {
        console.error('Error requesting push permissions:', error);
      });
    }
  }

  sendNotification(notificationData: NotificationData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${environment.oneSignalRestApi}`
    });

    const payload = {
      app_id: environment.OneSignalID,
      included_segments: ['All'],
      headings: { en: notificationData.title },
      contents: { en: notificationData.message },
      url: notificationData.url || '',
      send_after: notificationData.sendDate ? new Date(notificationData.sendDate).toISOString() : undefined
    };

    return this.http.post('https://onesignal.com/api/v1/notifications', payload, { headers });
  }

  getPlayerInfo(): Promise<any> {
    return OneSignal.User.getOnesignalId();
  }

  setExternalUserId(userId: string): void {
    OneSignal.login(userId);
  }
}
