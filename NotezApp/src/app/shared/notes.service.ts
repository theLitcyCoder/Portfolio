import { Injectable } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

    constructor(private afs: Firestore) {
   }

  //Add New Note
  addNote(note: Note){
     console.log("Note Addeds - Note ID ", note);
     note.id = doc(collection(this.afs, 'id')).id;
     return addDoc(collection(this.afs, 'Notes'), note);
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

   //Update a Note
   updateNote(note: Note){
    this.deleteNote(note);
    this.addNote(note)
  }

  //Get All Notes
   getNotes(): Observable<Note[]>{  
    let notesRef = collection(this.afs, 'Notes');
  
    console.log("All Notes - notesRef ", notesRef)
    return collectionData(notesRef, {idField: 'id'}) as Observable<Note[]>;
}

  //Delete a Note
  deleteNote(note: Note){
    let docRef = doc(this.afs, `Notes/${note.id}`);

    return deleteDoc(docRef);
  }
}
