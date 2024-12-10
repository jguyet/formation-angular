import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
    name: 'fromNowPipe',
})
export class FromNowPipePipe implements PipeTransform {
    transform(value: string | Date): string {
        return moment(value).fromNow();
    }
}
