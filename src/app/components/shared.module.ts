import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { InputComponent } from './input/input.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ButtonComponent, IconButtonComponent, InputComponent],
  imports: [CommonModule, IonicModule],
  exports: [ButtonComponent, IconButtonComponent, InputComponent],
})
export class SharedModule {}
