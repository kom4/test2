import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    this.server = this.serversService.getServer(id);
    this.route.paramMap.subscribe((params) => {
      this.server = this.serversService.getServer(+params.get('id'));
    });

  }

  editServer() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}

