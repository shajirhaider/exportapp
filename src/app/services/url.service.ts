import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  public LOGIN = ''
  public GetUser = 'rest/users/all'
  public companies_save = "/companies/save"


  constructor() { }

}
