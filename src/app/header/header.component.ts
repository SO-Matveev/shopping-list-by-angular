import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { map, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import * as AuthActions from "../auth/store/auth.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub: Subscription

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
    this.userSub = this.store.select('auth')
      .pipe(
        map(authState => authState.user)
      )
      .subscribe(user => {
        this.isAuthenticated = !!user;
      })
  }

  onSaveData(): void {
    this.dataStorageService.storeRecipes()
  }

  onFetchData(): void {
    this.dataStorageService.fetchRecipes().subscribe()
  }

  onLogout(): void {
    this.store.dispatch(new AuthActions.Logout())
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
