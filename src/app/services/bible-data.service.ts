import { Injectable } from '@angular/core';



@Injectable()
export class BibleDataService {
  //all bible data
  BibleData: Array<Object> = [
    // { "issue" : "blue", "keywords" : ["sadness","blue"], "themes": [], "verseID": 0},
    {"issue":"Feeling blue", "verseID":0, "keywords":["depressed","depression", "unhappy", "feeling down", "blue", "sad","feeling blue"]},
    {"issue": "Tempted to do wrong" , "verseID":1, "keywords":["tempt","temptation", "tempted", "sin", "wrong"]},
    {"issue": "Face physical danger" , "verseID":2, "keywords":["physical", "danger", "harm", "trouble","anxiety"]},
    {"issue": "Discouraged" , "verseID":3, "keywords":["discouraged","disheartened", "depression", "sin", "down", "depressed"]},
    {"issue": "Feeling bored" , "verseID":4, "keywords":["dull","idleness", "fatigued", "sick", "tired","bored","boredom"]},
    {"issue": "nothing seems to be going right" , "verseID":5, "keywords":["unlucky","frustrated", "frustration", "anger", "nothing seems to be going right"]},
    {"issue": "when you worry about having enough of life's necessities" , "verseID":6, "keywords":[""]},
    {"issue": "Afraid" , "verseID":7, "keywords":[""]},
    {"issue": "Lonely" , "verseID":8, "keywords":[""]},
    {"issue": "Anxious for those you love" , "verseID":9, "keywords":[""]},
    {"issue": "Sin" , "verseID":10, "keywords":[""]},
    {"issue": "Need forgiveness" , "verseID":11, "keywords":[""]},
    {"issue": "Feeling shame" , "verseID":12, "keywords":[""]},
    {"issue": "Feel no one understands" , "verseID":13, "keywords":[""]},
    {"issue": "Tempted to be stingy" , "verseID":14, "keywords":[""]},
    {"issue": "plan your budget" , "verseID":15, "keywords":[""]},
    {"issue": "have to leave home" , "verseID":16,"keywords":[""]},
    {"issue": "are tired" , "verseID":17,"keywords":[""]},
    {"issue": "friends seem to go back on you" , "verseID":18,"keywords":[""]},
    {"issue": "lose a loved one" , "verseID":19,"keywords":[""]},
    {"issue": "are afraid of death" , "verseID":20,"keywords":[""]},
    {"issue": "want to take revenge" , "verseID":21,"keywords":[""]},
    {"issue": "God seems far away" , "verseID":22,"keywords":[""]},
    {"issue": "have failed God" , "verseID":23,"keywords":[""]},
    {"issue": "feel abandoned" , "verseID":24,"keywords":[""]},
    {"issue": "need more than human help" , "verseID":25,"keywords":[""]},
    {"issue": "your past haunts you" , "verseID":26,"keywords":["past"]},
    {"issue": "need to get your head on right" , "verseID":27,"keywords":[""]},
    {"issue": "think you are the only one being tempted" , "verseID":28,"keywords":["temptation"]},
    {"issue": "need to know how to stay on the right path" , "verseID":29,"keywords":["direction"]},
    {"issue": "temptation seems stronger than you are" , "verseID":30,"keywords":["temptation"]},
    {"issue": "the devil comes after you" , "verseID":31,"keywords":[""]},
    {"issue": "you are sick" , "verseID":32,"keywords":[""]},
    {"issue": "feel weak" , "verseID":33,"keywords":[""]},
    {"issue": "experience trouble" , "verseID":34,"keywords":[""]},
    {"issue": "have left God" , "verseID":35, "keywords":["have left God"]},
    {"issue": "feling bitter" , "verseID":36,"keywords":["bitter"]},
    {"issue": "someone has wronged you" , "verseID":37,"keywords":["hurt"]},
    {"issue": "anxious" , "verseID":38,"keywords":["anxious"]},
    {"issue": "need guidance" , "verseID":39,"keywords":["guidance"]},
    {"issue": "feel sorry for yourself" , "verseID":40,"keywords":["sad"]},
    {"issue": "jealous of others' success" , "verseID":41,"keywords":["jealous"]},
    {"issue": "you doubt God wants to hear from you" , "verseID":42,"keywords":["doubt"]},
    {"issue": "need to know the ABCs of prayer" , "verseID":43,"keywords":["doubt"]},
    {"issue": "feel like giving up" , "verseID":44,"keywords":[""]},
    {"issue": "your faith seems insufficient" , "verseID":45,"keywords":["faith"]},
    {"issue": "fear failure" , "verseID":46, "keywords":["fear","failure","fail"]},
    {"issue": "experience a power shortage" , "verseID":47,"keywords":["worn out"]},
    {"issue": "hopes are dashed" , "verseID":48,"keywords":[""]},
    {"issue": "trouble comes wave after wave" , "verseID":49,"keywords":["trouble"]},
    {"issue": "doubt your worth" , "verseID":50,"keywords":["doubt"]},
    {"issue": "reading the Scripture seems dull" , "verseID":51,"keywords":[""]},
    {"issue": "people misread your intentions" , "verseID":52, "keywords":[""]},
    {"issue": "prideful" , "verseID":53,"keywords":["pride"]},
    {"issue": "you doubt God is able" , "verseID":54, "keywords":["doubt"]},
    {"issue": "angry" , "verseID":55, "keywords":["anger","angry"]},
    {"issue": "you see evil people prosper" , "verseID":56, "keywords":["evil"]},
    {"issue": "tempted to look out only for #1" , "verseID":57,"keywords":["selfish"]},
    {"issue": "carry a heavy load" , "verseID":58, "keywords":["burden"]},
    {"issue": "need direction" , "verseID":59,"keywords":["direction"]},
    {"issue": "when you worry" , "verseID":60, "keywords":["worry"]},
    {"issue": "selfishness gets you in its grip" , "verseID":61, "keywords":["selfishness"]},
    {"issue": "you suffer for doing right" , "verseID":62,"keywords":["suffer"]},
    {"issue": "doubt God loves you" , "verseID":63,"keywords":["doubt"]},
    {"issue": "think that God owes you mercy" , "verseID":64, "keywords":["think that God owes you mercy"]},
    {"issue": "evil in the world seems overwhelming" , "verseID":65, "keywords":["evil"]},
    {"issue": "evil seems greater than God" , "verseID":66, "keywords":["evil","justice"]},
    {"issue": "don't feel at peace with God" , "verseID":67,"keywords":["restless"]},
    {"issue": "someone has harmed you" , "verseID":68,"keywords":["no peace"]},
    {"issue": "God seems to delay" , "verseID":69,"keywords":["delay"]},
    {"issue": "you need wisdom" , "verseID":70,"keywords":[""]},
    {"issue": "tempted to look down on others" , "verseID":71,"keywords":[""]},
    {"issue": "there are troubles with your wife" , "verseID":72,"keywords":["wife"]},
    {"issue": "there are troubles with your husband" , "verseID":73,"keywords":[""]},
    {"issue": "tempted to commit sexual sin" , "verseID":74,"keywords":[""]},
    {"issue": "God does not seem to act" , "verseID":75,"keywords":[""]},
    {"issue": "you seek assurance of God's purpose for you" , "verseID":76,"keywords":[""]}
  ];

  verseData : Array<Object> = [

    	{"verseID":0, "verses":["Psalm 42:5", "Philippians 4:4"]},
    	{"verseID":1, "verses":["Matthew 4:1-11"]},
    	{"verseID":2, "verses":["Acts 27:13-26"]},
    	{"verseID":3, "verses":["2 Corinthians 1:3-11"]},
    	{"verseID":4, "verses":["Psalm 103"]},
    	{"verseID":5, "verses":["Psalm 37:1-4"]},
    	{"verseID":6, "verses":["Psalm 37:25-26"]},
    	{"verseID":7, "verses":["Psalm 27"]},
    	{"verseID":8, "verses":["Psalm 13"]},
    	{"verseID":9, "verses":["Psalm 107"]},
    	{"verseID":10, "verses":["1 John 1:9"]},
    	{"verseID":11, "verses":["Psalm 51"]},
    	{"verseID":12, "verses":["Proverbs 28:13"]},
    	{"verseID":13, "verses":["Hebrews 4:14-16"]},
    	{"verseID":14, "verses":["Proverbs 11:25"]},
    	{"verseID":15, "verses":["2 Corinthians 9:6-9"]},
    	{"verseID":16, "verses":["Psalm 121"]},
    	{"verseID":17, "verses":["Psalm 127:1-2"]},
    	{"verseID":18, "verses":["Psalm 55"]},
    	{"verseID":19, "verses":["1 Thessalonians 4:13-18"]},
    	{"verseID":20, "verses":["Psalm 23"]},
    	{"verseID":21, "verses":["Romans 12:19"]},
    	{"verseID":22, "verses":["Psalm 139"]},
    	{"verseID":23, "verses":["2 Timothy 2:13"]},
    	{"verseID":24, "verses":["Hebrews 13:5"]},
    	{"verseID":25, "verses":["Psalm 46"]},
    	{"verseID":26, "verses":["Colossians 1:21-22"]},
    	{"verseID":27, "verses":["Philippians 23"]},
    	{"verseID":28, "verses":["1 Corinthians 10:13"]},
    	{"verseID":29, "verses":["Psalm 119:9-11"]},
    	{"verseID":30, "verses":["Ephesians 6:10-18"]},
    	{"verseID":31, "verses":["James 4:7"]},
    	{"verseID":32, "verses":["James 5:14"]},
    	{"verseID":33, "verses":["2 Corinthians 12:9"]},
    	{"verseID":34, "verses":["2 Corinthians 1:3-11"]},
    	{"verseID":35, "verses":["Luke 15:11-32"]},
    	{"verseID":36, "verses":["Hebrews 12:15"]},
    	{"verseID":37, "verses":["Colossians 3:13"]},
    	{"verseID":38, "verses":["1 Peter 5:7"]},
    	{"verseID":39, "verses":["Proverbs 3:5-6"]},
    	{"verseID":40, "verses":["Psalm 102"]},
    	{"verseID":41, "verses":["Proverbs 14:30"]},
    	{"verseID":42, "verses":["Luke 18:1-8"]},
    	{"verseID":43, "verses":["Luke 11:1-4"]},
    	{"verseID":44, "verses":["Luke 11:5-13"]},
    	{"verseID":45, "verses":["Mark 9:14-24"]},
    	{"verseID":46, "verses":["Psalm 37:23-24"]},
    	{"verseID":47, "verses":["Ephesians 1:19-20"]},
    	{"verseID":48, "verses":["Psalm 34:18"]},
    	{"verseID":49, "verses":["James 1:2-4"]},
    	{"verseID":50, "verses":["Psalm 139:13-18"]},
    	{"verseID":51, "verses":["1 Thessalonians 2:13"]},
    	{"verseID":52, "verses":["Matthew 5:11-12"]},
    	{"verseID":53, "verses":["Romans 12:3"]},
    	{"verseID":54, "verses":["Ephesians 3:20"]},
    	{"verseID":55, "verses":["Ephesians 4:26-27"]},
    	{"verseID":56, "verses":["Psalm 37:1-3"]},
    	{"verseID":57, "verses":["Luke 12:13-21"]},
    	{"verseID":58, "verses":["Matthew 11:28-30"]},
    	{"verseID":59, "verses":["Psalm 25:9"]},
    	{"verseID":60, "verses":["Matthew 6:34"]},
    	{"verseID":61, "verses":["Matthew 16:25"]},
    	{"verseID":62, "verses":["1 Peter 1:6-7"]},
    	{"verseID":63, "verses":["John 3:16"]},
    	{"verseID":64, "verses":["Romans 2:4"]},
    	{"verseID":65, "verses":["Romans 8:28"]},
    	{"verseID":66, "verses":["Revelation 19:6"]},
    	{"verseID":67, "verses":["Romans 5:1-5"]},
    	{"verseID":68, "verses":["Matthew 6:14-15"]},
    	{"verseID":69, "verses":["John 11:1-44"]},
    	{"verseID":70, "verses":["James 1:5-8"]},
    	{"verseID":71, "verses":["Matthew 7"]},
    	{"verseID":72, "verses":["Ephesians 5:25-30"]},
    	{"verseID":73, "verses":["Ephesians 5:22-24"]},
    	{"verseID":74, "verses":["1 Corinthians 6:18-20"]},
    	{"verseID":75, "verses":["Luke 24:13-35"]},
    	{"verseID":76, "verses":["Psalm 138:7-8"]}

  ];


  constructor() {

  }

  getBibleData () : Array <Object> {

    return this.BibleData;
  }

  getVerseTable () : Array <Object> {

    return this.verseData;
  }

  //take verseid and return associated verse
  //returns null if verse not found
  fetchVerse ( verseID : number) : string  {
    let verse : string = null;
    for ( var i  = 0 ; i < this.verseData.length; i++) {
      if ( this.verseData[i.toString()].verseID === verseID) {
          verse = this.verseData[i.toString()];
      }
    }

    return verse;

  }



}
