import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Headers, Http, RequestOptions, Response,Jsonp} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BibleAPIService {

  //bibleApiUrl: string  = "http://labs.bible.org/api/?passage=John%203:16&type=json";

  constructor(private http: Http, private jsonp: Jsonp) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  fetchVerse (verse: string): Promise<any> {
    console.log('getting bible stuff');
    let url ='http://labs.bible.org/api/?passage='+verse+'&type=json&callback=JSONP_CALLBACK';
    console.log(url);
    return  this.jsonp.get(url)
                 .toPromise()
                 .then(response => response.json())
                 .catch(this.handleError);

  }

}
