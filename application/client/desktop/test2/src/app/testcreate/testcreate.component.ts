import { Component, OnInit } from '@angular/core';
import { TestcreateService } from './testcreate.service';

@Component({
  selector: 'app-testcreate',
  templateUrl: './testcreate.component.html',
  styleUrls: ['./testcreate.component.scss'],
})

export class TestcreateComponent implements OnInit {
    public test = {
        name: '',
    }

    constructor (
        private testcreateService: TestcreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.testcreateService.GpCreate(this.test).subscribe(data => {
            this.test.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}