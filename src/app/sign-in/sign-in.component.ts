import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { UrlService } from '../services/url.service';
import { LocalStorageService } from '../services/local-storage.service'
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  errorShow : boolean = false
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
});
  constructor(    
    private httpService: HttpService, 
    private url: UrlService, 
    private storage : LocalStorageService, 
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService) { }

  ngOnInit() {
  }
  signIn(){
    // this.loaderService.display(true);  
    // this.httpService.post(this.url.LOGIN, this.loginForm.value)
    //   .subscribe(
    //     (response) =>{   
    //       if(response.status == 200){
    //         if(response.body.lid){
    //           this.storage.clear()
    //           this.storage.setItem('lid', response.body.lid)
    //           this.storage.setItem('peopleRSN', response.body.peopleRSN)
    //         }
    //         else{
    //           this.errorShow = true
    //         }
    //         console.log(response)            
    //       }
    //     },
    //     (error) => console.log(error)
    //   );

        // this.httpService.get(this.url.GetUser)
        //   .subscribe(
        //     (response) =>{   
        //       console.log(response)
        //     },
        //     (error) => console.log(error)
        //   );
        this.router.navigate(['/admin/dashboard'])
  }
}
