import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'public-component',
    template: `<p>public component</p>`
})
class PublicComponent {
}

@Component({
    selector: 'private-component',
    template: `<p>private component</p>`
})
class PrivateComponent {
}
@NgModule({
    declarations: [PublicComponent, PrivateComponent],
    exports: [PublicComponent]  // 公开组件
})
export class OtherModule { }
