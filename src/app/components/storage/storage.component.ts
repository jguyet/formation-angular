import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UploadService } from 'src/app/shared/services/upload.service';
import { filter } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnDestroy {

    public form: FormGroup;

    /** type = progress | complete | unknown | error */
    public uploadResponse: any = { type: '', status: '', progress: 0, message: '', content: '', error: '' };

    public imgFile: BehaviorSubject<string> = new BehaviorSubject(null);

    private subscription: Subscription = new Subscription();

    constructor(public fb: FormBuilder, public uploadService: UploadService) {
        this.form = fb.group({
            file: ['']
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          if (file.type.indexOf('image') !== -1) {
            const parent = this;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                parent.imgFile.next(reader.result as string);
            };
          } else {
            this.imgFile.next(null);
          }
          this.form.get('file').setValue(file);
        }
    }

    onSubmit() {
        const formData = new FormData();
        formData.append('fileupload', this.form.get('file').value);

        this.subscription.add(this.uploadService.upload(formData)
            .pipe(filter(x =>
                x.type === HttpEventType.Response ||
                x.type === null && x.status === 'error' ||
                x.type === HttpEventType.UploadProgress))
            .subscribe(
                (res) => {
                    console.log(res);
                    this.uploadResponse = res;
                }
            ));
    }

}
