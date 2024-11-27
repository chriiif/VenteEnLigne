import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeperso'
})
export class PipepersoPipe implements PipeTransform {

  transform(nom:string): string {
    return '**'+nom+'**';
  }

}
