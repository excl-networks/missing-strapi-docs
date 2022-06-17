# Plugin Middlewares

There are 2 types of middlewares in Strapi. Strapi Middlewares (Global) and Route Middlewares

[Route Middleware Docs](https://docs.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/server.html#middlewares)

## Global Plugin Middlewares 


To implement a global middleware within a Strapi plugin you first need to make a middleware function

```js
// ./server/middlewares/your-middleware.js

module.exports = async (ctx, next) => {
  console.log("your custom logic")
  await next();

}
```
You will then export it via your index.js

```js
// ./server/middlewares/index.js
'use strict';
const yourMiddleware = require('./your-middleware');
module.exports = {
  yourMiddleware
};
```

Then in your [Register Lifecycle Hook](/guide/diagrams/lifecycle.html#register) you will add this code

```js
'use strict';
const middlewares = require('./middlewares');
module.exports = ({ strapi }) => {
    // registeration phase
    strapi.server.use(middlewares.yourMiddleware);
};
```

View an example [here](https://github.com/excl-networks/strapi-plugin-random-sort)
