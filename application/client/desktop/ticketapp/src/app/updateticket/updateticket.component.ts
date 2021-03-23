import { Component, OnInit } from '@angular/core';
import { UpdateticketService } from './updateticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss'],
})

export class UpdateticketComponent implements OnInit {
    queryId: any;
    servicetypesitemArray: any = [];
    severityitemArray: any = [];
    assigneesitemArray: any = [];
    public ticket = {
        name: '',
        description: '',
        service_types: '',
        severity: '',
        assignee: '',
    }

    constructor (
        private updateticketService: UpdateticketService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpUpdate() {
        this.updateticketService.GpUpdate(this.ticket).subscribe(data => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.service_types = ''
 	 	this.ticket.severity = ''
 	 	this.ticket.assignee = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updateticketService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updateticketService.GpGetNounById(this.queryId).subscribe(data => {
            this.ticket = data
        },
        error => {
            console.log('Error', error);
        });
    }
}