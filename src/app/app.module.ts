import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SummaryComponent } from './main-content/summary/summary.component';
import { BoardComponent } from './main-content/board/board.component';
import { AddTaskComponent } from './main-content/add-task/add-task.component';
import { ContactsComponent } from './main-content/contacts/contacts.component';
import { HeaderComponent } from './main-content/header/header.component';
import { ShowTaskComponent } from './dialogs/show-task/show-task.component';
import { EditTaskComponent } from './dialogs/edit-task/edit-task.component';
import { ShowContactComponent } from './dialogs/show-contact/show-contact.component';
import { EditContactComponent } from './dialogs/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ImprintComponent,
    SummaryComponent,
    BoardComponent,
    AddTaskComponent,
    ContactsComponent,
    HeaderComponent,
    ShowTaskComponent,
    EditTaskComponent,
    ShowContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
