import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() serverElement: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') heading: ElementRef;

  constructor() {
    console.log('ServerElementComponent constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ServerElementComponent ngOnChanges');
  }

  ngOnInit() {
    console.log('ServerElementComponent ngOnInit');
    console.log('Text Content: ' + this.heading.nativeElement.textContent); // error
  }

  ngDoCheck() {
    console.log('ServerElementComponent ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ServerElementComponent ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ServerElementComponent ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ServerElementComponent ngAfterViewInit');
    console.log('Text Content: ' + this.heading.nativeElement.textContent); // success
  }

  ngAfterViewChecked() {
    console.log('ServerElementComponent ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ServerElementComponent ngOnDestroy');
  }
}
