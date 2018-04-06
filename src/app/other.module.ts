import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'public-component',
    template: `<p>public component</p>`
})
class PublicComponent {
}
@NgModule({
    declarations: [PublicComponent],
    exports: [PublicComponent]  // 共有组件
})
export class OtherModule { }
