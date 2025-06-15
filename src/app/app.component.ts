import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

interface INotification {
  id: string;
  title: string;
  message: string;
  userId: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}
  
  title = 'my-auth-fe';

  notifications: Array<any> = [
    {
      id: 'test',
      title: 'test',
      message: 'test',
      userId: 'test'
    }
  ];

  private hubConnection!: signalR.HubConnection;

  ngOnInit(): void {
    // Khởi tạo HubConnection
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5190/notification') // Địa chỉ SignalR Hub của backend
      .build();

    // Bắt đầu kết nối
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.error('Error while starting connection: ' + err));

    // Lắng nghe sự kiện từ server
    this.hubConnection.on('SendNotification', (notification: any) => {
      // this.notifications = [ ...this.notifications, notification ];
      this.updateNotifications(notification);
      this.cdr.detectChanges();
      console.log(this.notifications);
    });
  }

  updateNotifications(notification: any): void {
    this.notifications.push(notification);
  }
}
