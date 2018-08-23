//https://developers.google.com/apis-explorer/?hl=en_US#p/calendar/v3/

//Get calendars.  Has .id
//GET https://www.googleapis.com/calendar/v3/users/me/calendarList?key={YOUR_API_KEY}

//
"kind": "calendar#calendarList",
 "etag": "\"p33k9t3fita1tq0g\"",
 "nextSyncToken": "COiejfLqg90CEhFzY2Fobi54QGdtYWlsLmNvbQ==",
 "items": [
  {


   "kind": "calendar#calendarListEntry",
   "etag": "\"1535049848830000\"",
   "id": "scahn.x@gmail.com",
   "summary": "School",
   "timeZone": "America/New_York",
   "colorId": "23",
   "backgroundColor": "#cd74e6",
   "foregroundColor": "#000000",
   "selected": true,
   "accessRole": "owner",

"kind": "calendar#calendarListEntry",
   "etag": "\"1514315213055000\"",
   "id": "cma50c4rhfoooopplghd9ibulk@group.calendar.google.com",
   "summary": "Actual",
   "timeZone": "America/New_York",
   "colorId": "8",
   "backgroundColor": "#16a765",
   "foregroundColor": "#000000",
   "selected": true,
   "accessRole": "owner",

   "kind": "calendar#calendarListEntry",
   "etag": "\"1535050005041000\"",
   "id": "bkqud2am1q1euiahp2pikn2his@group.calendar.google.com",
   "summary": "Fun",
   "timeZone": "America/New_York",
   "colorId": "14",
   "backgroundColor": "#9fe1e7",
   "foregroundColor": "#000000",
   "selected": true,
   "accessRole": "owner",


// Get all events for a calendar.
// GET https://www.googleapis.com/calendar/v3/calendars/{CALENDAR_ID}/events?key={YOUR_API_KEY}

"kind": "calendar#events",
 "etag": "\"p33k9t3fita1tq0g\"",
 "summary": "School",
 "updated": "2018-08-23T18:46:45.041Z",
 "timeZone": "America/New_York",
 "accessRole": "owner",
 "defaultReminders": [
  ...
 ],
 "nextPageToken": "CigKGjU2Y3Z1c2k4NTIzOXRsazVwcDFoZzFnMm5vGAEggICAgL2s-KwTGg0IABIAGOiejfLqg90C",
 "items": [
  {


   "kind": "calendar#event",
   "etag": "\"2487419459120000\"",
   "id": "p4o81pu9i2083e6u01g8qoug8c",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=cDRvODFwdTlpMjA4M2U2dTAxZzhxb3VnOGMgc2NhaG4ueEBt",
   "created": "2009-05-30T18:55:24.000Z",
   "updated": "2009-05-30T18:55:29.560Z",
   "summary": "Wakeup",
   "creator": {
    "email": "scahn.x@gmail.com",
    "displayName": "Chul Ahn",
    "self": true
   },
   "organizer": {
    "email": "scahn.x@gmail.com",
    "displayName": "Chul Ahn",
    "self": true
   },
   "start": {
    "dateTime": "2009-06-01T08:00:00-04:00"
   },
   "end": {
    "dateTime": "2009-06-01T08:30:00-04:00"
   },
   "iCalUID": "p4o81pu9i2083e6u01g8qoug8c@google.com",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {


   "kind": "calendar#event",
   "etag": "\"2487419898642000\"",
   "id": "52qllo7nuoohsjv7i9thciv3h4",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=NTJxbGxvN251b29oc2p2N2k5dGhjaXYzaDQgc2NhaG4ueEBt",
   "created": "2009-05-30T18:55:41.000Z",
   "updated": "2009-05-30T18:59:09.321Z",
   "summary": "BreakFast/Korean Packet",
   "creator": {
    "email": "scahn.x@gmail.com",
    "displayName": "Chul Ahn",
    "self": true
   },
   "organizer": {
    "email": "scahn.x@gmail.com",
    "displayName": "Chul Ahn",
    "self": true
   },
   "start": {
    "dateTime": "2009-06-01T08:30:00-04:00"
   },
   "end": {
    "dateTime": "2009-06-01T08:50:00-04:00"
   },
   "iCalUID": "52qllo7nuoohsjv7i9thciv3h4@google.com",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },

