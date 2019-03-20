import { Component, OnInit } from '@angular/core';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    console.log(this.serversService.getServersInfo());
  }
}
