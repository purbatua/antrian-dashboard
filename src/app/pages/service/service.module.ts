import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ServiceRoutingModule, routedComponents } from './service-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ServiceRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ServiceModule { }
