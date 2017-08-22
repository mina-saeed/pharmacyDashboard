import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false
})

export class filter implements PipeTransform {
    transform(items: any[], criteria: any): any {
        if (criteria === undefined) return items;

        return items.filter(item => {
            var name = item.name_en.toString();

            if (name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())) {
                return true;
            }
            return false;
        });
    }
}