import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NoteDetailsComponent } from './pages/note-details/note-details.component.txtt';
// import { NoteEditComponent } from './pages/note-edit/note-edit.component';
import { NotelistComponent } from './pages/notelist/notelist.component';

const routes: Routes = [ 
      { path: '', component: NotelistComponent},

         
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
