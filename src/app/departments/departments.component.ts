import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public selectedId;
   departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Mongo"},
    {"id":3,"name":"React"},
    {"id":4,"name":"Node"},
    {"id":5,"name":"View"}
  ]
  constructor(private router : Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let departmentId = parseInt(params.get('id'));
      this.selectedId = departmentId ;
    })
  }

  onSelect(department){
    //this.router.navigate(['/departments',department.id]);
    this.router.navigate([department.id],{relativeTo : this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
