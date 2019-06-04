import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostSelectedComponent } from './components/post-selected/post-selected.component';
import {MatButtonModule, MatCardModule, MatListModule, MatToolbarModule} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import {metaReducers, reducers} from './store/reducers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {Post} from './store/effects/post';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostSelectedComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([Post]),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
