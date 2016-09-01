# lateral-server

### Development

1) Install node 6 or later, then install packages:

    npm install

2) Add env vars to shell:

    FACEBOOK_CLIENT_ID
    FACEBOOK_CLIENT_SECRET

3) Install [ngrok](https://www.npmjs.com/package/ngrok) globally:

    npm install ngrok -g

4) Start your app:

    npm start

5) Start ngrok:

    ngrok http 3030

Note: To enable facebook login remember to change Site URL to the one set by ngrok in https://developers.facebook.com/apps/APP_ID/settings.
