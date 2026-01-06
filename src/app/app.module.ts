import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServicesComponent } from './course-content/services/services.component';
import { AccountComponent } from './course-content/services/account/account.component';
import { NewAccountComponent } from './course-content/services/new-account/new-account.component';
import { Assignment5ServicesComponent } from './course-content/assignment-5-services/assignment-5-services.component';
import { ActiveUsersComponent } from './course-content/assignment-5-services/active-users/active-users.component';
import { InactiveUsersComponent } from './course-content/assignment-5-services/inactive-users/inactive-users.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipeDetailComponent,
    DropdownDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    Assignment5ServicesComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
