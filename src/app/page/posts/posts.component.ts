import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() childMessage: any;
  @Output() voteSize = new EventEmitter();
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  voted(){
    this.counter ++;
    this.voteSize.emit(this.counter);
  }


}
