# How to publish/unpublish programmatically
 
Strapi doesn't have a booleain value that determines if content is published or not, rather they determine the state by checking if the publishedAt field is !null

## Example:

```json
// Not Published
  {
    id: 1,
    Title: 'test123',
    createdAt: '2022-05-30T20:28:24.920Z',
    updatedAt: '2022-06-21T20:35:21.312Z',
    publishedAt: null // No Date Set
  },
// Published
  {
    id: 2,
    Title: 'test2', 
    createdAt: '2022-06-01T13:10:06.779Z',
    updatedAt: '2022-06-01T13:10:07.588Z',
    publishedAt: '2022-06-01T13:10:07.587Z' // Date Set
  },
```

## Entity Service API

Create
```js
const entry = await strapi.entityService.create('api::article.article', {
  data: {
    title: 'My Article',
    publishedAt: new Date()  
  },
});
```

Update
```js
await strapi.entityService.update('api::blog.blog', 1, {
      data:{
        publishedAt: new Date()
      },
    });
```

## Query API

```js
await strapi.db.query('api::blog.blog').update({
  where: { id: 1 },
  data: {
      publishedAt: new Date()
  },
});
```
