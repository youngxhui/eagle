import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs/operators';
import Banner from 'src/app/entity/banner';
import { BannerService } from 'src/app/service/banner.service';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  uploading = false;
  fileList: NzUploadFile[] = [];
  effect = 'scrollx';
  dataOfBarnner = [];
  enableBanner = [];
  /**
   * 模态框可见性
   */
  isVisible = false;
  pageIndex = 1;

  constructor(
    private bannerService: BannerService,
    private fileService: FileService,
    private fb: FormBuilder,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      description: [null, [Validators.required]],
    });
    this.getAllBanner();
  }

  getAllBanner() {
    this.enableBanner = [];
    this.bannerService
      .getAllBanner(this.pageIndex - 1, 10)
      .subscribe((result) => {
        this.dataOfBarnner = result.data.content;
        for (let index = 0; index < this.dataOfBarnner.length; index++) {
          const banner: Banner = this.dataOfBarnner[index];
          if (banner.enable) {
            this.enableBanner.push(banner);
          }
        }
        console.log(this.enableBanner);
      });
  }

  /**
   * 展示 modal
   */
  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  /**
   * 点击确认按钮的时候
   */
  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files', file);
    });
    formData.append('type', 'banner');

    this.uploading = true;

    this.fileService.uploadImages(formData).subscribe((fileResult) => {
      this.uploading = false;
      var filePath = '';
      //@ts-ignore
      for (let index = 0; index < fileResult.data.paths.length; index++) {
        //@ts-ignore
        filePath =
          'http://localhost:8800/' +
          //@ts-ignore
          fileResult.data.root +
          '/' +
          //@ts-ignore
          fileResult.data.paths[index];
        const description = this.validateForm.get('description').value;
        var banner = new Banner();
        banner.description = description;
        banner.path = filePath;

        this.bannerService.addBanner(banner).subscribe(
          (result) => {
            this.isVisible = false;
          },
          (err) => {},
          () => {
            this.getAllBanner();
          }
        );
      }
    });
  }

  validateForm!: FormGroup;
}
