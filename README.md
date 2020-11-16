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

In oder to review the app you must create a new PR from your branch to `develop` branch, and from [heroku pipeline], in the Review column, you should click on `Create review app` in order to review it.

#### Release to development

Once you have reviewed your MR and its url from Review Apps, you can merge it and review [development url].

#### Release to production

Create a PR from develop to master, review and merge it, , wait for a success build, and then check the [production url].

[heroku pipeline]: https://dashboard.heroku.com/pipelines/53c6ce91-2169-4f9b-81d1-527dcaab1ab0
[development url]: https://mastersanto-pager-dev.herokuapp.com/
[production url]: https://mastersanto-pager.herokuapp.com/
