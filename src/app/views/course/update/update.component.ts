import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { CourseService } from 'src/app/service/course.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FileService } from 'src/app/service/file.service';
import { Course } from 'src/app/entity/course';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private courseService: CourseService,
    private fileService: FileService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {}
  fallback =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==';
  // 翻页按钮和index
  current = 0;

  index = 'First-content';
  // 表单参数
  validateForm!: FormGroup;

  // 级联选择
  nzOptions: NzCascaderOption[] = [];

  // 课程标签
  values: string[] = [];

  // 课程实体
  course = new Course();
  catalogs: string[] = [];
  // 课程时长
  hour = 0;
  minutes = 0;

  listOfData = [1];

  // 封面文件
  uploading = false;
  coverFile: NzUploadFile[] = [];
  // 目录列表
  catalogFile: NzUploadFile[] = [];
  fileList: NzUploadFile[] = [];

  // 翻页器按钮及内容联动设置
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    this.current += 1;
    this.handleCoverUpload();
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = '课程信息';
        break;
      }
      case 1: {
        this.course.url = this.validateForm.controls.courseUrl.value;
        this.course.period =
          Number(this.validateForm.controls.hour.value) * 60 +
          Number(this.validateForm.controls.min.value);
        this.course.name = this.validateForm.controls.courseName.value;
        this.course.institution = this.validateForm.controls.institution.value;
        this.course.description = this.validateForm.controls.description.value;
        this.course.teacher = this.validateForm.controls.teacher.value;
        this.course.online = this.validateForm.controls.online.value == '1';
        //@ts-ignore
        this.course.tipId = Number(this.values[0]);
        //@ts-ignore
        this.course.subTipId = Number(this.values[1]);
        //@ts-ignore
        this.course.levelId = Number(this.validateForm.controls.level.value);

        //@ts-ignore
        if (this.course.levelId === 1) {
          this.course.level.name = '简单';
          //@ts-ignore
        } else if (this.course.levelId === 2) {
          this.course.level.name = '一般';
        } else {
          this.course.level.name = '困难';
        }

        break;
      }
      case 2: {
        this.index = '完成';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  // 发起课程信息提交请求
  submitCourse(): void {
    this.courseService.updateCourse(this.course).subscribe((data) => {
      console.log('update');
    });
    // this.courseService.saveOne(this.course).subscribe(
    //   (data) => {
    //     console.log('添加成功', data);
    //   },
    //   () => {
    //     console.log('Error');
    //   },
    //   () => {}
    // );
  }

  // 表单内容部分
  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  getCourseUrl(e: MouseEvent): void {
    e.preventDefault();
  }

  getTipAndSub(): void {
    this.courseService.getTipsAndSub().subscribe(({ data }) => {
      // tslint:disable-next-line:forin
      for (const i in data) {
        this.nzOptions = [
          ...this.nzOptions,
          {
            value: data[i].tip.id.toString(),
            label: data[i].tip.name,
            children: [],
          },
        ];
        for (const j in data[i].subTipsList) {
          // tslint:disable-next-line:forin
          this.nzOptions[i].children = [
            ...this.nzOptions[i].children,
            {
              value: data[i].subTipsList[j].id.toString(),
              label: data[i].subTipsList[j].name,
              isLeaf: true,
            },
          ];
        }
      }
    });
  }

  changeTips(values: string[]): void {
    console.log(values, this.values);
  }

  // 上传封面
  beforeCoverUpload = (file: NzUploadFile): boolean => {
    console.log('cover', file);
    this.coverFile = this.coverFile.concat(file);
    return false;
  };

  handleCoverUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    if (this.coverFile.length === 0) {
      this.handleCatalogUpload();
      return;
    }
    this.coverFile.forEach((file: any) => {
      formData.append('files', file);
    });
    formData.append('type', 'cover');
    this.uploading = true;
    this.fileService.uploadImages(formData).subscribe(
      (data) => {
        // console.log('file upload res is ', data);
        // @ts-ignore
        const temp = data.data.paths;
        // @ts-ignore
        const rootPath = data.data.root;
        let s = '';
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < temp.length; i++) {
          s = s + rootPath + '/' + temp[i] + '】【';
        }
        this.course.cover += s;
        this.uploading = false;
        this.coverFile = [];
        this.handleCatalogUpload();
        this.msg.success('封面上传成功');
      },
      () => {
        this.uploading = false;
        this.msg.error('Error.');
      },
      () => {
        this.uploading = false;
      }
    );
  }

  // 提交目录图片
  beforeCatalogUpload = (file: NzUploadFile): boolean => {
    this.catalogFile = this.catalogFile.concat(file);
    return false;
  };

  handleCatalogUpload(): void {
    const formData = new FormData();
    if (this.catalogFile.length === 0) {
      this.submitCourse();
      return;
    }
    // tslint:disable-next-line:no-any
    this.catalogFile.forEach((file: any) => {
      formData.append('files', file);
    });
    formData.append('type', 'catalog');
    this.uploading = true;
    this.fileService.uploadImages(formData).subscribe(
      (data) => {
        this.uploading = false;
        // @ts-ignore
        const temp = data.data.paths;
        // @ts-ignore
        const rootPath = data.data.root;
        let s = '';
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < temp.length; i++) {
          s = s + rootPath + '/' + temp[i] + '】【';
        }
        this.course.catalog += s;
        this.submitCourse();
        this.msg.success('添加成功');
      },
      () => {
        this.uploading = false;
      },
      () => {
        this.uploading = false;
      }
    );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      courseUrl: [null, [Validators.required]],
      courseName: [null, [Validators.required]],
      institution: [null, [Validators.required]],
      description: [null, [Validators.required]],
      teacher: [null, [Validators.required]],
      online: ['1', [Validators.required]],
      level: ['1', [Validators.required]],
      hour: ['1', [Validators.required]],
      min: ['1', [Validators.required]],
    });

    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.initFormValue(courseId);
    this.getTipAndSub();
  }

  initFormValue(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe((result) => {
      this.course = result.data;
      console.log('course =>', this.course);

      this.catalogs = this.course.catalog.split('】【');
      // this.catalogs.push(cs[0]);
      this.validateForm.get('courseUrl').setValue(this.course.url);
      this.validateForm.get('courseName').setValue(this.course.name);
      this.validateForm.get('institution').setValue(this.course.institution);
      this.validateForm.get('description').setValue(this.course.description);
      this.validateForm.get('teacher').setValue(this.course.teacher);
      this.validateForm.get('online').setValue(this.course.online ? '1' : '0');
      this.validateForm.get('level').setValue(`${this.course.level.id}`);
      this.hour = Number((this.course.period / 60 - 0.5).toFixed(0));
      this.minutes = this.course.period % 60;
      this.validateForm.get('hour').setValue(`${this.hour}`);
      this.validateForm.get('min').setValue(`${this.minutes}`);
    });
  }
}
