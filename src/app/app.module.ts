
import { AppComponent } from './app.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';

import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
@NgModule({
  declarations: [
    AppComponent,
    ProductdisplayComponent
    MenuComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
