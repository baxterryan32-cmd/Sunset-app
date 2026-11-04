SUNSET PWA — first prototype

WHAT'S INCLUDED
- General daily motivation and KJV scripture library stored in app.js
- Both / Motivation / Scripture display modes
- Daily deterministic selection (same content for the same date)
- Saved favourites using local storage
- Share today's content
- Settings screen with reminder time preference
- Service worker cache for offline use after the first successful online visit

IMPORTANT LIMITATIONS
- This is a first prototype, not a published Play Store app.
- For installability and service-worker offline caching, host it over HTTPS (GitHub Pages is a free option).
- Open it once while online, then revisit it to test offline mode.
- The reminder screen saves the user's chosen time and requests notification permission. This prototype does NOT yet schedule a guaranteed background notification at that time. Reliable scheduled reminders need a native Android wrapper or a carefully tested platform-specific solution.
- The current library has 30 general messages and 30 KJV scripture selections, not 365 yet.
- KJV text is used for the scripture excerpts.

QUICK START
1. Extract this ZIP.
2. Upload the files to a GitHub repository.
3. Enable GitHub Pages in repository Settings > Pages, using the main branch and root folder.
4. Open the published HTTPS address on Android Chrome.
5. Use Chrome's menu > Add to Home screen / Install app.
6. Open SUNSET once online so the offline cache is saved.
7. Turn on Airplane mode and reopen SUNSET to test.

NEXT DEVELOPMENT STEPS
- Expand and review the content library.
- Add robust scheduled notifications.
- Add onboarding and a proper preference screen.
- Test on the target Android device and across browsers.
