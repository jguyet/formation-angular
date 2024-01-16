import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'fromNowPipe',
  standalone: false
})
export class FromNowPipePipe implements PipeTransform {

  transform(value: number): string {
    console.log(value);
    return moment(value).fromNow();
  }

}
