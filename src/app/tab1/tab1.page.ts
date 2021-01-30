import { Component } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  playlist: any[];

  get embedUrl() {
    return this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.playlist[0].embed}`);
  }

  constructor(private playlistSvc: PlaylistService,
    private dom:DomSanitizer) {
    this.playlist = this.playlistSvc.playlist;
  }

}
