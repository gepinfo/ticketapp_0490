import { Component, OnInit } from '@angular/core';
import { CreateservicetypeService } from './createservicetype.service';

@Component({
  selector: 'app-createservicetype',
  templateUrl: './createservicetype.component.html',
  styleUrls: ['./createservicetype.component.scss'],
})

export class CreateservicetypeComponent implements OnInit {
    public servicetypes = {
        name: '',
        description: '',
    }

    constructor (
        private createservicetypeService: CreateservicetypeService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createservicetypeService.GpCreate(this.servicetypes).subscribe(data => {
            this.servicetypes.name = ''
 	 	this.servicetypes.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}