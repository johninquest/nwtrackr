import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModules } from './material.modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultComponent } from './pages/default/default.component';
import { DeviceInfoComponent } from './pages/device-info/device-info.component';
import { NetworthComponent } from './pages/networth/networth.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AssetListComponent } from './pages/assets/asset-list/asset-list.component';
import { AssetUpdateComponent } from './pages/assets/asset-update/asset-update.component';
import { AssetCreateComponent } from './pages/assets/asset-create/asset-create.component';
import { UserComponent } from './pages/user/user.component';
import { LiabilityListComponent } from './pages/liabilities/liability-list/liability-list.component';
import { LiabilityCreateComponent } from './pages/liabilities/liability-create/liability-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    DefaultComponent,
    DeviceInfoComponent,
    NetworthComponent,
    AuthComponent,
    AssetListComponent,
    AssetUpdateComponent,
    AssetCreateComponent,
    UserComponent,
    LiabilityListComponent,
    LiabilityCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModules,
    AuthModule.forRoot({
      domain: 'dev-4drk72zgjywr0v0f.us.auth0.com',
      clientId: 'hHFpVmYlDWI85KJptMKDmqISZA77e1WK',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
