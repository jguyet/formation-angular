import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {

  @Input('article') article: Article;
  
  //ContentChild selector #id
  @ContentChild('a', { static: false }) href: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngAfterContentInit(): void {
    console.log(this.href);
  }

  ngAfterViewInit(): void {
    console.log('After view init', this.href);
  }

}
