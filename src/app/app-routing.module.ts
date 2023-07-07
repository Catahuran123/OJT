import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { OfficeComponent } from './component/office/office.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'office', component: OfficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
