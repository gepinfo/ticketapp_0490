import { Component, OnInit } from '@angular/core';
import { CreateassigneeService } from './createassignee.service';

@Component({
  selector: 'app-createassignee',
  templateUrl: './createassignee.component.html',
  styleUrls: ['./createassignee.component.scss'],
})

export class CreateassigneeComponent implements OnInit {
    public assignees = {
        name: '',
        description: '',
    }

    constructor (
        private createassigneeService: CreateassigneeService,
    ) { }

    ngOnInit() {
    }
}