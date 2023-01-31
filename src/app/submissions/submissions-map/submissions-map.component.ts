import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissions-map',
  templateUrl: './submissions-map.component.html',
  styleUrls: ['./submissions-map.component.scss']
})
export class SubmissionsMapComponent implements OnInit {

  @Input() submissions_list: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
