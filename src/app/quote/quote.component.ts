import { Component, OnInit, } from '@angular/core';
import {Quote,} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [
    new Quote(1,'The past is past. Put it down and move foward.','by Bonface Good',new Date(2018,10,2)),
    new Quote(2,'Trust is like an eraser, it gets smaller with each mistake.','by moses Kiplagat',new Date(2018,10,5)),
    new Quote(3, 'You can fake a smile, but you can not fake your feelings.','by Joseph Igathe',new Date(2018,10,9)),
    new Quote(4, 'Seek respect not attention. It lasts longer.','by Mary Njoki',new Date(2018,10,12)),
    new Quote(5, 'Am not perfect but atleast am real.','Anonymous',new Date(2018,10,17)),
    new Quote(6, 'Sometimes your heart needs more time to accept what your mind already knows.','by David Ngatia',new Date(2018,10,18)),
    new Quote(7, 'I never urgue. I just explain why I am right.','by Sarah Suarez',new Date(2018,10,28)),
]


completeQuote(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }


toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

constructor() { }
ngOnInit() {
}
}
