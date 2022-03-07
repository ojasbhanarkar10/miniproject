import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  user$ = this.authService.user$;
  logout$!: Observable<any>;

  constructor(
    private af:AngularFireStorage,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  logout(): void {
    this.logout$ = this.authService
      .logout()
      .pipe(
        tap(() => this.router.navigateByUrl('.login'))
      )
  }

  path:String | undefined

  upload($event: any){
    this.path = $event.target.files[0]
  }

  uploadImage(){
    console.log(this.path);

    this.af.upload("/files"+Math.random()+this.path, this.path);
  }

}
