import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  selectedVerse: any;
  issueTitle: string;

  constructor() { }

  setSellectedVerse (selectedVerse: any ) {
    this.selectedVerse = selectedVerse;
    console.log("set the selectedverse", this.selectedVerse);
  }

  getSelectedVerse () : any {
    return this.selectedVerse;
  }

  setIssueTitle (  issueTitle: string ) {
    this.issueTitle = issueTitle;
    console.log("set title", this.selectedVerse);
  }

  getIssueTitle () : any {
    return this.issueTitle;
  }


}
