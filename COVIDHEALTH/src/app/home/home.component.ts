import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template:'UserName:{{username}}'
})
export class HomeComponent implements OnInit {
@Input() username:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(v =>
       console.log(v)
       )
  }

}
