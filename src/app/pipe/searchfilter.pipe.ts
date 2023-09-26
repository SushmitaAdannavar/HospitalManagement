import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(data: Array<any>, search: string) {
    if (search==='') {
      return data;
    }
    const users = [];
    for (const user of data) {
    if(user['name']===search){
      users.push(user);
    }
    }
    return users;
    
  }

}
