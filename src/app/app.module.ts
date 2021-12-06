import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './vistas/plus/navbar/navbar.component';
import { SidebarComponent } from './vistas/plus/sidebar/sidebar.component';
import { FooterComponent } from './vistas/plus/footer/footer.component';
import { CategoriasComponent } from './vistas/categorias/categorias.component';
import { MarcasComponent } from './vistas/marcas/marcas.component';
import { ProductosComponent } from './vistas/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CategoriasComponent,
    MarcasComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
