import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {

  embedUrl: SafeResourceUrl;
  message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dom: DomSanitizer
  ) {
    activatedRoute.params.subscribe((v) => {
      if(!v.embed) {
        this.message = 'Please select a song from the playlist';
        return;
      }
      this.embedUrl = this.dom.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${v.embed}`
      );
      this.message = '';
    });
  }
}
