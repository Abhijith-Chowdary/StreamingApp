import { Component, OnInit } from '@angular/core';
import { STREAMS } from '../mock_stream';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit {
  streams = STREAMS;

  constructor() { }

  ngOnInit(): void {
  }

}
