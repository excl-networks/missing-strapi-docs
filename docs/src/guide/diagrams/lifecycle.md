# Lifecycle Diagram

This diagram outlines the flow from the initial `strapi start` to the end of a request.

_You can click on any of the diamond shapes for more information_

``` mermaid
flowchart TB
    A([Strapi start]) --> B{Register} 
    B -- Strapi Setup --> C
    C{Boostrap} -- Server Starts --> D
    D(Request)
    D --> Koa
        subgraph Koa
        direction LR
        r1(Router)
        r1 --> c1
        r1 --> c2
        r1 --> c3
            subgraph Collections
            direction TB
            c3(Users)
            c2(Blog)
            c1(Home)
            end
        c3 --> r5
        c2 --> r5
        c1 --> r5
        r5{Policy} --> r6{Middleware}
        r6 --> r7{Controller}
        r7 --> r8{Middleware}
        r8 --> r9(Router)
        end
    Koa --> G
    G(Client)
    click B "#register"
    click C "#bootstrap"
    click r5 "#policies"
    click r6 "#middlewares"
    click r7 "#controllers"
    click r8 "#middlewares"
```

# Register

This is the very first thing that happens when a strapi app is starting. This happens _before_ any setup process and you wont have any access to db, routes, policies etc.

# Bootstrap

This happens before the server boots but after Strapi has setup meaning you have access to anything that you would usually have in the `Strapi` object

_Tip:  you can run `yarn strapi console` and interact with the strapi object_

# Policies

Policies are binary middlewares. They are mainly used to handle authentication and will either allow a request to go through or deny it.

# Middlewares

Middlewares allow you to look at any incoming request and modify the `ctx` payload however you need to call the `next()` to pass it over to the controller, but any logic after `next()` will have the response from the controller

# Controllers

Controllers are code that always get executed when a request is made and contain the core logic of any request. The core controllers tend to contain the logic to grab data from the database.
