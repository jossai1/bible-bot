import { Component, OnInit } from '@angular/core';
import { BibleDataService } from '../services/bible-data.service';
import { SharedService } from '../services/shared-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BibleDataService]
})
export class HomeComponent implements OnInit {

  bibleData: Array<Object> = [];

  constructor( private bibleDataService : BibleDataService, private sharedService: SharedService, private router: Router) { }

  //issue filter for search box
  issueFilter: any = { issue: '', keywords: [] };
  // keyword: any = { keyword: '' };


  ngOnInit() {

    this.bibleData = this.bibleDataService.getBibleData();
    console.log (this.bibleData);
    console.log (this.bibleData["0"].issue);
    let verse = this.bibleDataService.fetchVerse(this.bibleData["0"].verseID);
    //check to ensure its not null
    if(verse) {
      console.log(verse);
    }
    else {
      console.log("not found");
    }
  }

  displayVerse (verseId: number, issue:string)
  {
    let verseObject = this.bibleDataService.fetchVerse(verseId);
    this.sharedService.setSellectedVerse( verseObject);
    this.sharedService.setIssueTitle( issue);

    //now navigate to the displayverse comp.
    this.router.navigate(["verse-display"]);

  }



}
