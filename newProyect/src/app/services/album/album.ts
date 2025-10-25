import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Album {
  getAlbums() {
    return ['Album 1', 'Album 2', 'Album 3'];
  }
}
