Exercise 5 - Equipment Request Application

## Run locally

From the repository folder, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open [the application](http://127.0.0.1:8000/) in a browser. The server only
serves the application files. The app saves requests in the browser's local
storage and needs no account or database. Use the same address and browser
profile when returning to your requests.

## Test the app

1. Open the app in a fresh browser profile and check that it shows “No requests yet.”
2. Add a camera with **High** priority, a monitor with **Medium** priority,
   and a keyboard with **Low** priority. Check that all three appear in the
   order added, with the selected priorities.
3. Try submitting a blank or whitespace-only name, then try a name without
   selecting a priority. Check that no request is added in either case.
4. Refresh, then close and reopen the page at the same address. Check that
   the same three requests and priorities still appear.
