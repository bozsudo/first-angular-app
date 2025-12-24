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
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import {LoggingService} from "./services/logging.service";
import {AccountsService} from "./services/accounts.service";

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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
