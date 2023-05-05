import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_DATA } from './dynamic-page/page-data';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

const routes: Routes = [];

PAGE_DATA.forEach((page) => {
  routes.push({
    path: page.id,
    component: DynamicPageComponent,
    data: page,
  });
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
