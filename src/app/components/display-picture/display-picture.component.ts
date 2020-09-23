import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, AbstractControl, Validators } from '@angular/forms';
import { DownloadPictureService } from 'src/app/shared/services/download-picture.service';

export function isUrlValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    var test = control.value.match(/(http\:\/\/.*)/gm);
    return test ? null : { url: 'get url' };
  };
}

@Component({
  selector: 'app-display-picture',
  templateUrl: './display-picture.component.html',
  styleUrls: ['./display-picture.component.css']
})
export class DisplayPictureComponent implements OnInit {

  public finalUrl: string = undefined;

  public formGroup: FormGroup;
  public urlCtrl: FormControl = new FormControl('', [Validators.required, isUrlValidator()]);

  constructor(
    public downloadPictureService: DownloadPictureService,
    public builder: FormBuilder) {
      this.formGroup = this.builder.group({
        'url': this.urlCtrl
      });
    }

  ngOnInit() {
  }

  download(url: string) {
    this.downloadPictureService.download(url)
    .subscribe((blobUrl) => {
      this.finalUrl = blobUrl;
      //window.open(blobUrl);
    });
  }

}
