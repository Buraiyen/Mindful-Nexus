import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_DATA } from './dynamic-page/page-data';
import { HomePageComponent } from './home-page/home-page.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

const routes: Routes = [];

routes.push({
  path: '',
  component: HomePageComponent,
});

// adding dynamic routes for dynamic pages
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
