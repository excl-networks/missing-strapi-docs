# Storing Data

To store data you will use a content type which is the exact same thing as a content type when interacting with Strapi normally.

To make a new content type it's best to use the Strapi CLI

```bash
# yarn
yarn strapi generate content-type

# npm
npm run strapi generate content-type
```

It's a PITA to fill out all the fields via the cli so I would make a basic content type and then in your ./plugins/your-plugin/content-types/schema/index.js and enable `content-type-builder` and make your content type within the admin UI

You may need to add this to your schema


```js
  pluginOptions: {
    'content-manager': {
      visible: true
    },
    'content-type-builder': {
      visible: true
    }
  },
```

### Content Manager
This will determine whether the collection is shown with all of the other collections on the left and side

### Content Type Builder

This will determine if you can edit the fields within with builder on the admin panel


## CRUDing Data

_CRUD stands for Create Read Update Delete_

You can only update data from the `./server` folder, _if you need to update data from the admin panel see [Passing Data](/guide/plugin-guides/passing-data.html)_

To do this you can use either the [Entity Service API](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service-api.html) or the [Query Engine API](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine-api.html)

You can access the DB via the `strapi` object which can be found in `middlewares` `policies` `controllers` `register hook` `boostrap hook` `destroy hook` `services` 


Query Example:

```js
let data = await strapi.query('plugin::{{your-plugin-slug}}.{{content-type}}').findMany();
```


## Query Engine vs Entity Service

[Query Engine API](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine-api.html)

This allows for unrestricted access, and you can't (easily) access complex Strapi data like dynamic zones

[Entity Service API](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity)

This allows for queries that needs to access components or dynamic zones


