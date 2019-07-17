
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  screenWidth: number;

  navItem = [
    {text:"Companies", url:"/admin/list", icon:"add"},
    {text:"Merchant", url:"/companies", icon:"add"},
    {text:"Clients", url:"/companies", icon:"add"}
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.screenWidth = window.innerWidth;
  
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
