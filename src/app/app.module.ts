import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegestrationComponent } from './RegisterFolder/regestration/regestration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TailorComponent } from './RegisterFolder/tailor/tailor.component';
import { DesignerComponent } from './RegisterFolder/designer/designer.component';
import { ClientComponent } from './RegisterFolder/client/client.component';
import { StoreComponent } from './RegisterFolder/store/store.component';
import { HomeComponent } from './Home/home/home.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { LoginComponent } from './RegisterFolder/login/login.component';
import { HeaderComponent } from './Home/header/header.component';
import { SectionComponent } from './Home/section/section.component';
import { AfterSectionComponent } from './Home/after-section/after-section.component';
import { AlltailorsComponent } from './ViewFolder/alltailors/alltailors.component';
import { EachtailorComponent } from './ViewFolder/eachtailor/eachtailor.component';
import { SidebarComponent } from './ViewFolder/sidebar/sidebar.component';
import { UpdateFormComponent } from './ViewFolder/update-form/update-form.component';
import { AllDesginersComponent } from './ViewFolder/all-desginers/all-desginers.component';
import { EachDesginerComponent } from './ViewFolder/each-desginer/each-desginer.component';
import { UpdateDesignerFormComponent } from './ViewFolder/update-designer-form/update-designer-form.component';
import { DesignerSidebarComponent } from './ViewFolder/designer sidebar/designer-sidebar.component';
import { DesignModule } from './Design/design/design.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { ChatMoModule } from './ChatApplication/chat-mo/chat-mo.module';
import { ViewDesignsComponent } from './view-designs/view-designs.component';
import { ViewComponentsHomeComponent } from './Design/view-components-home/view-components-home.component';
import { NgxPaginationModule } from 'ngx-pagination' ;
import { TeamComponent } from './Home/team/team.component';
import { FooterComponent } from './Home/footer/footer.component';
import { DesignOrderCreationComponent } from './Client/design-order-creation/design-order-creation.component';
import { ClothesOptionsComponent } from './Client/clothes-options/clothes-options.component';
import { ChooseDesignComponent } from './Client/choose-design/choose-design.component';
import { TailorPasswordComponent } from './ViewFolder/tailor-password/tailor-password.component';
import { AllStoresComponent } from './ViewFolder/all-stores/all-stores.component';
import { EachStoreComponent } from './ViewFolder/each-store/each-store.component';
import { StoreSidebarComponent } from './ViewFolder/Storesidebar/storesidebar.component'; 
import { UpdateStoreComponent } from './ViewFolder/update-store/update-store.component';
import { DesginerPasswordComponent } from './ViewFolder/desginer-password/desginer-password.component';
import { StorePasswordComponent } from './ViewFolder/store-password/store-password.component';
import { ColorService } from './services/color-service';
import { FabricService } from './services/fabric-service';
import { DesignOrdersComponent } from './Client/design-orders/design-orders.component';
import { UploadDesignComponent } from './Client/upload-design/upload-design.component';
import { DesignOrderDetailsComponent } from './Client/design-order-details/design-order-details.component';
import { TailorOrdersComponent } from './Client/tailor-orders/tailor-orders.component';
import { AboutComponent } from './Home/about/about.component';
import { DeleteAccountComponent } from './ViewFolder/delete-account/delete-account.component';
// import {EmojiModule} from 'angular-emoji/dist'
@NgModule({
  declarations: [
    AppComponent,
    RegestrationComponent,
    TailorComponent,
    DesignerComponent,
    ClientComponent,
    StoreComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    HeaderComponent,
    SectionComponent,
    AfterSectionComponent,
    AlltailorsComponent,
    EachtailorComponent,
    SidebarComponent,
    UpdateFormComponent,
    TeamComponent,
    FooterComponent,
    DesignOrderCreationComponent,
    ClothesOptionsComponent,
    ChooseDesignComponent,
    AboutComponent,
    ViewComponentsHomeComponent,
    ViewDesignsComponent,
    UpdateFormComponent,
    AllDesginersComponent,
    EachDesginerComponent,
    UpdateDesignerFormComponent,
    DesignerSidebarComponent,
    TailorPasswordComponent,
    AllStoresComponent,
    EachStoreComponent,
    StoreSidebarComponent,
    UpdateStoreComponent,
    DesginerPasswordComponent,
    StorePasswordComponent,
    DesignOrdersComponent,
    UploadDesignComponent,
    DesignOrderDetailsComponent,
    TailorOrdersComponent,
    DesginerPasswordComponent,
    EachStoreComponent,
    StorePasswordComponent,
    StoreSidebarComponent,
    UpdateStoreComponent,
    DeleteAccountComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DesignModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    ChatMoModule,
  //  NgxPaginationModule

    NgxPaginationModule
  ],
  providers: [ColorService,FabricService],
  bootstrap: [AppComponent],
})
export class AppModule {

}
