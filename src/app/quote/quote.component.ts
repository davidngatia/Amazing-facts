import { Component, OnInit, } from '@angular/core';
import {Quote,} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
  quotes = [
    new Quote(1,'The past is past. Put it down and move foward.','by Bonface Good',new Date(2018,10,2),0,0),
    new Quote(2,'Trust is like an eraser, it gets smaller with each mistake.','by moses Kiplagat',new Date(2018,10,5),0,0),
    new Quote(3, 'You can fake a smile, but you can not fake your feelings.','by Joseph Igathe',new Date(2018,10,9),0,0),
    new Quote(4, 'Seek respect not attention. It lasts longer.','by Mary Njoki',new Date(2018,10,12),0,0),
    new Quote(5, 'Am not perfect but atleast am real.','Anonymous',new Date(2018,10,17),0,0),
    new Quote(6, 'Sometimes your heart needs more time to accept what your mind already knows.','by David Ngatia',new Date(2018,10,18),0,0),
    new Quote(7, 'I never urgue. I just explain why I am right.','by Sarah Suarez',new Date(2018,10,28),0,0),
]




deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
    
    if(toDelete){
      this.quotes.splice(index,1);
    }
  }
}
    

      
      toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
      }
      
      constructor() { }
      ngOnInit() {
        
      }
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id=quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
    upVote(i){
      this.quotes[i].upVote += 1;
    }
    downVote(i){
      this.quotes[i].downVote += 1;
    }
  }