import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissions-list',
  templateUrl: './submissions-list.component.html',
  styleUrls: ['./submissions-list.component.scss']
})
export class SubmissionsListComponent implements OnInit {

  currentPage: number = 1;
  pageSize = 10;
  responsive = true;

  @Input() submissions_list: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
  }

}
