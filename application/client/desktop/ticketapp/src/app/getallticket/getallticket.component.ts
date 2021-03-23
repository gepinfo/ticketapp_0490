import { Component, OnInit } from '@angular/core';
import { GetallticketService } from './getallticket.service';

@Component({
  selector: 'app-getallticket',
  templateUrl: './getallticket.component.html',
  styleUrls: ['./getallticket.component.scss'],
})

export class GetallticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Service Types', field: 'service_types'  },{ headerName: 'Severity', field: 'severity'  },{ headerName: 'Assignee', field: 'assignee'  },];
    public ticket = {
        name: '',
        description: '',
        service_types: '',
        severity: '',
        assignee: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallticketService: GetallticketService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallticketService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}