# Pager Chat Exercise

## Run app

### Local development

```
npm run build
npm run start:dev
```

### Deployment workflow

Deployment is automated with this [heroku pipeline].

#### Review App

In oder to review the app you could push to `develop` branch, wait for a success build, and then check the [review url].

#### Release to production

Create a PR from develop to master, review and merge it, , wait for a success build, and then check the [production url].



[heroku pipeline]: https://dashboard.heroku.com/pipelines/53c6ce91-2169-4f9b-81d1-527dcaab1ab0
[review url]: https://pager-prod-develop-vp4akakvunq.herokuapp.com/
[production url]: https://mastersanto-pager.herokuapp.com/