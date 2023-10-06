import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './features/inicio/pages/inicio-page/InicioPageComponent';
import { NosotrosPageComponent } from './features/nosotros/pages/nosotros-page/nosotros-page.component';
import { DonarPageComponent } from './features/donar/pages/donar-page/donar-page.component';
import { SolicitarPageComponent } from './features/solicitar/pages/solicitar-page/solicitar-page.component';
import { RegistroPageComponent } from './features/registro/pages/registro-page/registro-page.component';
import { AdmPageComponent } from './features/adm/pages/adm-page/adm-page.component';
import { SesionPageComponent } from './features/sesion/pages/sesion-page/sesion-page.component';
import { PaneladmPageComponent } from './features/paneladm/pages/paneladm-page/paneladm-page.component';
const routes: Routes = [


  
];

            


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
