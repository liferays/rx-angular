import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { DirtyChecksModule } from '../dirty-checks';
import { RenderingsModule } from '../renderings';
import { PushPipe } from '@rx-angular/template/push';
import { WorkVisualizerComponent } from './visualizer/work-visualizer.component';

@NgModule({
  declarations: [VisualizerComponent, WorkVisualizerComponent],
  imports: [CommonModule, DirtyChecksModule, RenderingsModule, PushPipe],
  exports: [VisualizerComponent, WorkVisualizerComponent],
})
export class VisualizerModule {}
