import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 13';

  getData()
  {
    console.warn('function called');
  }

  getFormData(data:any)
  {
    console.log(data);
  }


}
