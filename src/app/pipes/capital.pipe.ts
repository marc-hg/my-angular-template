import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital',
})
export class CapitalPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let wordArr = value.split('');
    wordArr[0] = wordArr[0].toUpperCase();
    return wordArr.join('');
  }
}
