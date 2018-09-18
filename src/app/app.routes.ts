import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'chat', component: ChatComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
