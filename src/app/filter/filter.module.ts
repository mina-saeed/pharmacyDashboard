import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {filter} from "./filter.pipe";

@NgModule({
  declarations:[filter],
  imports:[CommonModule],
  exports:[filter]
})

export class MainPipe{}