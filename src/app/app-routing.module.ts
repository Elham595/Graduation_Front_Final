import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseDesignComponent } from './Client/choose-design/choose-design.component';
import { ClothesOptionsComponent } from './Client/clothes-options/clothes-options.component';
import { DesignOrderCreationComponent } from './Client/design-order-creation/design-order-creation.component';
import { ChatComponent } from './ChatApplication/chat/ChatComponent';
import { AddNewDesignComponent } from './Design/add-new-design/add-new-design.component';
import { ViewComponentDetailsComponent } from './Design/view-component-details/view-component-details.component';
import { ViewComponentsHomeComponent } from './Design/view-components-home/view-components-home.component';
import { AboutComponent } from './Home/about/about.component';
import { HomeComponent } from './Home/home/home.component';
import { ClientComponent } from './RegisterFolder/client/client.component';
import { DesignerComponent } from './RegisterFolder/designer/designer.component';
import { LoginComponent } from './RegisterFolder/login/login.component';
import { RegestrationComponent } from './RegisterFolder/regestration/regestration.component';
import { StoreComponent } from './RegisterFolder/store/store.component';
import { TailorComponent } from './RegisterFolder/tailor/tailor.component';
import { AllDesginersComponent } from './ViewFolder/all-desginers/all-desginers.component';
import { ViewDesignsComponent } from './view-designs/view-designs.component';
import { AlltailorsComponent } from './ViewFolder/alltailors/alltailors.component';
import { EachDesginerComponent } from './ViewFolder/each-desginer/each-desginer.component';
import { EachtailorComponent } from './ViewFolder/eachtailor/eachtailor.component';
import { UpdateDesignerFormComponent } from './ViewFolder/update-designer-form/update-designer-form.component';
import { UpdateFormComponent } from './ViewFolder/update-form/update-form.component';
import { TailorPasswordComponent } from './ViewFolder/tailor-password/tailor-password.component';
import { AllStoresComponent } from './ViewFolder/all-stores/all-stores.component';
import { EachStoreComponent } from './ViewFolder/each-store/each-store.component';
import { UpdateStoreComponent } from './ViewFolder/update-store/update-store.component';
import { DesginerPasswordComponent } from './ViewFolder/desginer-password/desginer-password.component';
import { StorePasswordComponent } from './ViewFolder/store-password/store-password.component';
import { DesignOrdersComponent } from './Client/design-orders/design-orders.component';
import { UploadDesignComponent } from './Client/upload-design/upload-design.component';
import { DesignOrderDetailsComponent } from './Client/design-order-details/design-order-details.component';
import { DeleteAccountComponent } from './ViewFolder/delete-account/delete-account.component';

const routes: Routes = [
// {
//   path: 'register',component: RegestrationComponent,
//   children: [
//     {path:'client',component:ClientComponent},
//     {path:'store',component:StoreComponent},
//     {path:'designer',component:DesignerComponent},
//     {path:'tailor',component:TailorComponent},
//   ],
// },
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'create/designOrder/:Measurment/:designId/:imageName',component:DesignOrderCreationComponent},
{path:'client/home',component:ClothesOptionsComponent} ,
{path:'chooseDesign/:clotheName/:clotheId',component:ChooseDesignComponent} ,
{path:'client/designOrder',component:DesignOrdersComponent} ,
{path:'client/uploadDesign/:clotheName/:clotheId',component:UploadDesignComponent} ,
{path:'client/designOrder/details/:designOrderNumber',component:DesignOrderDetailsComponent} ,
{path:'about',component:AboutComponent},
{path:"",component:HomeComponent},
{path:'register',component: RegestrationComponent},
{path:'client',component:ClientComponent},
{path:'store',component:StoreComponent},
{path:'designer',component:DesignerComponent},
{path:'tailor',component:TailorComponent},
{path:'Tailors',component:AlltailorsComponent},
{path:'Stores',component:AllStoresComponent},
{path:'profile/:username',component:EachtailorComponent},
{path:'update/:username',component:UpdateFormComponent},
{path:'updateStore/:username',component:UpdateStoreComponent},
{path:'ChangePassword/:email',component:TailorPasswordComponent},
{path:'ChangeDesginerPassword/:email',component:DesginerPasswordComponent},
{path:'ChangeStorePassword/:email',component:StorePasswordComponent},
{path:'updateDesigner/:username',component:UpdateDesignerFormComponent},
{path:'Desginers',component:AllDesginersComponent},
{path:'Desginerprofile/:username',component:EachDesginerComponent},
{path:'Storeprofile/:userName',component:EachStoreComponent},
// {path:'update/:username',component:UpdateFormComponent},
{path: 'add-des', component: AddNewDesignComponent },
{path:'chat', component:ChatComponent},
{path:'designdetilas/:id',component:ViewComponentDetailsComponent},
{path:'ViewDesigns/:name',component:ViewDesignsComponent},
{path:'AdminHome',component:ViewComponentsHomeComponent},
{path:'client/uploadDesign/:clotheName/:clotheId',component:UploadDesignComponent} ,
{path:'DeleteAccount',component:DeleteAccountComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
