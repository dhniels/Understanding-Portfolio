#Local Data Storage
With local storage, web applications can store data locally within the user’s browser.

Before HTML5, application data had to be stored in cookies, included in every server request. Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

Local storage is per domain. All pages, from one domain, can store and access the same data.

##localStorage Object
localStorage objects store data with no expiration date. Close the browser tab (or window), and the object remains and is not reset.

##sessionStorage Object
sessionStorage objects only store data for one session.Close the browser tab (or window), the object is reset.