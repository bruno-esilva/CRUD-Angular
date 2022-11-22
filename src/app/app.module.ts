import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import ptBR from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';

//Define o padrão para brasileiro
registerLocaleData(ptBR)

@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    DashboardComponent,
    ClientesComponent,
    ProdutosComponent,
    PedidosComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [
    //Importa o local para padrão português
    { provide: LOCALE_ID, useValue: 'pt'},
    //Importa o padrão de moeda para R$
    { 
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
