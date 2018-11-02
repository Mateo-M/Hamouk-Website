import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  data: any;

  constructor(private http: HttpClient) { }

  getServersInfo() {
    const serversInfo = this.http.get('https://mcapi.de/api/server/178.63.100.124/25577')
      .subscribe((res: Response) => {
        this.data = JSON.stringify(res.json());
      });

  }
}
