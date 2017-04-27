import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
                <h2> {{title}}</h2>
                <span>Şimple Installation and Build</span>
              `,
})
export class AppComponent {
    title: string = 'Angular 4';
}
