import { Component, OnInit } from '@angular/core';
import { AppHeaderService } from '@website/core/services';

@Component({
  selector: 'svv-handball',
  templateUrl: './svv-handball.component.html',
  styleUrls: ['./svv-handball.component.scss'],
})
export class SvvHandballComponent implements OnInit {
  constructor(private appHeaderService: AppHeaderService) {}

  ngOnInit() {
    this.appHeaderService.showStaticHeader();
  }
}
