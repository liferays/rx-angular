import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { PushPipe } from '@rx-angular/template/push';
import { RxLet } from '@rx-angular/template/let';
import { UnpatchModule } from '@rx-angular/template/unpatch';
import { DirtyChecksModule } from '../../debug-helper/dirty-checks';
import { VisualizerModule } from '../../debug-helper/visualizer';
import { RecursiveObservableWorkAsyncComponent } from './recursive-observable-work-async.component';
import { RecursiveObservableWorkPushComponent } from './recursive-observable-work-push.component';
import { RecursiveObservableComponent } from './recursive-observable.component';
import { RecursiveStaticComponent } from './recursive-static.component';
import { ValueProvidersModule } from '../../debug-helper/value-provider';
import { RenderingsModule } from '../../debug-helper/renderings';
import { RecursiveAsyncComponent } from './recursive-async.component';
import { RecursivePushComponent } from './recursive-push.component';
import { RecursiveEmbeddedViewLetComponent } from './recursive-embedded-view-let.component';
import { RecursiveComponentLetComponent } from './recursive-component-let.component';

const DECLARATIONS = [
  RecursiveStaticComponent,
  RecursiveObservableComponent,
  RecursiveAsyncComponent,
  RecursivePushComponent,
  RecursiveComponentLetComponent,
  RecursiveEmbeddedViewLetComponent,
  RecursiveObservableWorkPushComponent,
  RecursiveObservableWorkAsyncComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    MatButtonModule,
    DirtyChecksModule,
    UnpatchModule,
    PushPipe,
    VisualizerModule,
    ValueProvidersModule,
    RenderingsModule,
    RxLet,
  ],
  exports: DECLARATIONS,
})
export class RecursiveModule {}
