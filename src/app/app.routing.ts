import { Routes,RouterModule } from "@angular/router";
import { AuthguardService } from "./authguard.service";
import { BookforbarterComponent } from "./bookforbarter/bookforbarter.component";
import { BookforbarterdetailsComponent } from "./bookforbarter/bookforbarterdetails/bookforbarterdetails.component";
import { BookforbarterdetailsService } from "./bookforbarterdetails.service";
import { BookforsaleComponent } from './bookforsale/bookforsale.component';
import { BookforsaledetailsComponent } from './bookforsale/bookforsaledetails/bookforsaledetails.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from "./login/login.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { MybooksComponent } from "./mybooks/mybooks.component";
import { MycartComponent } from "./mycart/mycart.component";
import { MyshelfComponent } from "./myshelf/myshelf.component";
import { OrderComponent } from './order/order.component';
const arr:Routes=[
  {path:'',component:DemoComponent},
  {path:'bookforsale/:category_id',component:BookforsaleComponent},
  {path:'bookforsaledetail/:book_id',component:BookforsaledetailsComponent},
  {path:'bookforbarter',component:BookforbarterComponent},
  {path:'bookforbarterdetails/:bookbarter_id',component:BookforbarterdetailsComponent},
  {path:'mycart',component:MycartComponent,canActivate:[AuthguardService]},
  {path:'myshelf',component:MyshelfComponent,canActivate:[AuthguardService]},
  {path:'myaccount',component:MyaccountComponent,canActivate:[AuthguardService]},
  {path:'mybooks',component:MybooksComponent,canActivate:[AuthguardService]},
  {path:'myorder',component:OrderComponent,canActivate:[AuthguardService]},
  {path:'login',component:LoginComponent}
];
export const routingarr=RouterModule.forRoot(arr);
