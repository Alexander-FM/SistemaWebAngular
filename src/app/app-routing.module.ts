import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from "./vistas/plus/inicio/inicio.component";
import {CategoriasComponent} from "./vistas/categorias/categorias.component";
import {MarcasComponent} from "./vistas/marcas/marcas.component";
import {ProductosComponent} from "./vistas/productos/productos.component";

const routes: Routes = [
  {path: '', component: InicioComponent}, //Cuando la ruta de la pagina este vacía por defecto va a llamar a Inicio Component
  {path: 'categorias', component: CategoriasComponent},
  {path: 'marcas', component: MarcasComponent},
  {path: 'productos', component: ProductosComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
