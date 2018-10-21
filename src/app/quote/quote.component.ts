import { Component, OnInit } from '@angular/core';
import {Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [
    new Quote(1,'The past is past. Put it down and move foward.','by Bonface Good'),
    new Quote(2,'Trust is like an eraser, it gets smaller with each mistake.','by moses Kiplagat'),
    new Quote(3, 'You can fake a smile, but you can not fake your feelings.','by Joseph Igathe'),
    new Quote(4, 'Seek respect not attention. It lasts longer.','by Mary Njoki'),
    new Quote(5, 'Am not perfect but atleast am real.','Anonymous'),
    new Quote(6, 'Sometimes your heart needs more time to accept what your mind already knows.','by David Ngatia'),
    new Quote(7, 'I never urgue. I just explain why I am right.','by Sarah Suarez'),
]

  constructor() { }

  ngOnInit() {
  }

}
