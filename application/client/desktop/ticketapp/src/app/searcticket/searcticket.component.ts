import { Component, OnInit } from '@angular/core';
import { SearcticketService } from './searcticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcticket',
  templateUrl: './searcticket.component.html',
  styleUrls: ['./searcticket.component.scss'],
})

export class SearcticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Service Types', field: 'service_types'  },{ headerName: 'Severity', field: 'severity'  },{ headerName: 'Assignee', field: 'assignee'  },];
    severityitemArray: any = [];
    assigneesitemArray: any = [];
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
        private searcticketService: SearcticketService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
    GpSearch() {
        this.searcticketService.GpSearch(this.ticket).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updateticket'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}