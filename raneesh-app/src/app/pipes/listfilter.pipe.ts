import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listfilter'
})
export class ListfilterPipe implements PipeTransform {

  transform(item: any[], filterText:string): any[] {
    if(!item) return [];
   if(!filterText) return item;
   filterText=filterText.toLowerCase();
   return item.filter(it=>{
return it.login.toLowerCase().includes(filterText);
   });
  }

}
