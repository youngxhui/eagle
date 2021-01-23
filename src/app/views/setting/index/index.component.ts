import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { BannerService } from 'src/app/service/banner.service';
import { FileService } from 'src/app/service/file.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  dataOfBarnner = [];
  /**
   * 模态框可见性
   */
  isVisible = false;
  pageIndex = 1;

  constructor(
    private bannerService: BannerService,
    private msg: NzMessageService,
    private fileService: FileService
  ) {}
  // constructor() {}

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.log('file');
    }
  }
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

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
