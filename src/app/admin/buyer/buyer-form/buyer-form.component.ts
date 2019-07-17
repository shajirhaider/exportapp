import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { UrlService } from '../../../services/url.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.css']
})
export class BuyerFormComponent implements OnInit {

  entity = new FormGroup({
    id: new FormControl (''),
    name: new FormControl(''),
    industry: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    phone: new FormControl(''),
    fax: new FormControl(''),
    website: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl(''),
    type: new FormControl("Buyer")
  });
  contactPerson = new FormGroup({
    id: new FormControl (''),
    name: new FormControl(''),
    position: new FormControl(''),
    department: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    cell: new FormControl(''),
    comment: new FormControl(''),
    companyOid : new FormControl(''),
    type: new FormControl('')
  });

  personType:any [] =[
    {text:"Contact Person", value:"Contact Person"},
    {text:"Merchant", value:"Merchant"},
    {text:"Contact Person & Person", value:"Contact Person & Merchant"},
  ]
  filteredpersonType: Observable<any[]>;

  

  datas: any [] =[];
  displayedColumns: string[] = ['name','position','department','email','phone','action'];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;

  constructor( private http: HttpService, private url: UrlService ) { 
    this.filteredpersonType= this.contactPerson.get('type').valueChanges
        .pipe(
          startWith<string | any>(''),
          map(value => typeof value === 'string' ? value : value.text),
          map(name => name ? this._filterContactPerson(name) : this.personType.slice())         
        );
  }

  ngOnInit() {
  }

  saveBuyer(){
    this.entity.value.id  = new Date().getMilliseconds()
    console.log(this.entity.value)
    this.http.post(this.url.companies_save, this.entity.value) 
      .subscribe(
          (response) =>{   
            if(response.status == 200){
              console.log(response)            
            }
          },
          (error) => console.log(error)
        );
  }
  addPerson(){
      this.datas.push( this.contactPerson.value)
      this.dataSource = new MatTableDataSource(this.datas)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort;
  }
  displayfilterType(name?: any): string | undefined {
    return name ? name.text : undefined;
  }
  private _filterContactPerson(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.personType.filter(option => option.text.toLowerCase().indexOf(filterValue) === 0);
  }

}
