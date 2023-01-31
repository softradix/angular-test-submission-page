import { Component, OnInit } from '@angular/core';

import list from './submissionsList.json';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  list_type: number = 2;

  submissions_list: any = (list.submissionsList as any);

  constructor() { }

  ngOnInit(): void {
  }

  // function to get list
  listType(list_type: number) {
    this.list_type = list_type;
  }

}
