import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/service/banner.service';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  dataOfBarnner = [];

  pageIndex = 1;

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.getAllBanner();
  }

  getAllBanner() {
    this.bannerService
      .getAllBanner(this.pageIndex - 1, 10)
      .subscribe((result) => {
        this.dataOfBarnner = result.data.content;
        console.log('banner', this.dataOfBarnner);
      });
  }
}
