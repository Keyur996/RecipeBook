import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Browser Animation Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime Ng modules
// Forms Modules
import {CheckboxModule} from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import {ChipsModule} from 'primeng/chips';
import {DropdownModule} from 'primeng/dropdown'; // Angular Scrolling Module
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {KnobModule} from 'primeng/knob';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

//Button Modules Prime Ng
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

//Data View Modules Primeng
import {DataViewModule} from 'primeng/dataview';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GMapModule} from 'primeng/gmap';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {PaginatorModule} from 'primeng/paginator';
import {PickListModule} from 'primeng/picklist';
import {TableModule} from 'primeng/table';
import {TimelineModule} from 'primeng/timeline';
import {TreeModule} from 'primeng/tree';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

//Menu PrimeNg
import {MenuModule} from 'primeng/menu'; //required when using MegaMenu
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';

//file and http Module
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

//Toastr Module
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';

//Alert Button
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DialogModule} from 'primeng/dialog';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

// Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Panel Modules Panel
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {SplitterModule} from 'primeng/splitter';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import { MessagesModule } from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, CheckboxModule, AutoCompleteModule, CalendarModule, ChipsModule, DropdownModule,
    InputMaskModule, InputNumberModule, InputSwitchModule, InputTextModule, InputTextareaModule, KnobModule,
    KeyFilterModule, ListboxModule, MultiSelectModule, PasswordModule, RadioButtonModule, RatingModule, SliderModule, 
    SelectButtonModule, ToggleButtonModule, TriStateCheckboxModule, ButtonModule, SplitButtonModule, FileUploadModule,
    HttpClientModule, ToastrModule.forRoot({ timeOut: 10000, positionClass: 'toast-top-right', closeButton: true, }),
    ToastModule, TableModule, DataViewModule, FullCalendarModule, GMapModule, OrderListModule,
    OrganizationChartModule, PaginatorModule, PickListModule, TimelineModule, TreeModule,
    VirtualScrollerModule, ConfirmDialogModule, ConfirmPopupModule, DialogModule, DynamicDialogModule,
    OverlayPanelModule, SidebarModule, TooltipModule, MenuModule, BreadcrumbModule, ContextMenuModule,
    MegaMenuModule, MenubarModule, SidebarModule, TabMenuModule, PanelMenuModule, SlideMenuModule,
    StepsModule, TieredMenuModule, FormsModule, ReactiveFormsModule, AppRoutingModule,
    FontAwesomeModule, FormsModule, ReactiveFormsModule, AccordionModule, CardModule, DividerModule,
    FieldsetModule, PanelModule, SplitterModule, ScrollPanelModule, TabViewModule, ToolbarModule, MessagesModule,
    MessageModule
  ],
  providers: [
     DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe,
     DialogService, MessageService, ToastrService, ConfirmationService, RecipeService, 
     ShoppingListService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
