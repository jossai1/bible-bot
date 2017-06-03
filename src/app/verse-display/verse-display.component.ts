import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
import { BibleAPIService } from '../services/bible-api.service';
import { BibleDataService } from '../services/bible-data.service';
import { Router } from "@angular/router";
import { Location } from "@angular/common";


@Component({
  selector: 'app-verse-display',
  templateUrl: './verse-display.component.html',
  styleUrls: ['./verse-display.component.css'],
  providers: [BibleAPIService, BibleDataService]
})
export class VerseDisplayComponent implements OnInit {

  verseData: any; //object passed from home page that user selected
  title: string;

  error:any;

  //array for final display of versetext, id , and verse
  //data gotten from here and api
  loadedVerses: Array <Object> = [] ;
  verses:any = [];

  constructor(private sharedService: SharedService,  private router: Router, private location: Location, private bibleAPIService: BibleAPIService, private bibleDataService: BibleDataService) { }

  ngOnInit() {

    this.verseData = this.sharedService.getSelectedVerse();
    this.title = this.sharedService.getIssueTitle();

    if (this.verseData || this.title) {

      //go ahead and display what we've been able to get
      this.fetchVersesTextFromApi();

    } else {
      //navigate back to home if null - means user has come to this page withouth selecteing a verseID
      //via a url
      //might want to store the last verse in storage so they can come back to it
      this.router.navigate(["home"]);
      this.verseData = {"verseID": -1, "verses":["null"]};
    }

  }

  goBack () {
      this.location.back();
  }

  fetchVersesTextFromApi () {
    let verseID = this.verseData.verseID;
    //let verseText ;//= //call to api to fecth versetext given verse
    let verses = this.verseData.verses;

    console.log(verses);
    for(var i = 0 ; i < verses.length; i++) {
        //let verseText; // API.GETverse(verses[i.tostring()])
        let verseAPIData;

        let verse:string  = verses[i];
        setTimeout(() => {
            this.bibleAPIService
              .fetchVerse(verse)
              .then(data=> verseAPIData = data)
              .catch(error=> this.error = error);

        setTimeout(() => {
            console.log(verseAPIData);
              let verseText = verseAPIData.text;
              // this.loadedVerses.push ({"verse": verses[i], "verseID": verseID, "verseText":verseText});
              console.log(verses['0']);
              this.loadedVerses.push ({"verseText":verseAPIData,"verseDetails":verses});
              console.log(this.loadedVerses)
            }, 2000);
          }, 100);

    }
  }

}
