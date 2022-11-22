import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'estoque', component:EstoqueComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'produtos', component:ProdutosComponent},
  {path: 'pedidos', component:PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
