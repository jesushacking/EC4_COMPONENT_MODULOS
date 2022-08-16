import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AcercaComponent,
    ProductosComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,
  AcercaComponent,ProductosComponent,FooterComponent]
})
export class ModulsModule { }
