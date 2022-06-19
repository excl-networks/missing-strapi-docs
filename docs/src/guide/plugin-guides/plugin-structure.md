# Plugin Structure

Within your `./src/plugins` folder you will see a new folder with your plugin name

The directory looks something like this:

_Click on the boxes for more info_
```mermaid
graph LR
    root[.] --> 1[strapi-admin.js]
    root --> 4[strapi-server.js]
    root --> 2[./server]
    root --> 3[./admin/src]
    subgraph 3g[Admin Panel Code]
      3 --> 31[components]
      3 --> 32[index.js]
      3 --> 33[pages]
      3 --> 34[pluginId.js]
      3 --> 35[translations]
      3 --> 36[utils]
        subgraph 36g[Utils]
            36 --> 361[axiosInstance.js] 
        end
    end
    subgraph 2g[Server Side Code]
      2 --> 21[boostrap.js]
      2 --> 22[config/index.js]
      2 --> 23[controllers]
      2 --> 24[destroy.js]
      2 --> 25[index.js]
      2 --> 26[register.js]
      2 --> 27[routes/index.js]
      2 --> 28[services]
    
    end

linkStyle 0,1,2,3,4,5,6 stroke-width:1px;

style 1g fill:transparent,stroke:#E5E5E5,stroke-width:1px,stroke-dasharray:5;
style 2g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;
style 3g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;

click 21 "/guide/diagrams/lifecycle.html#bootstrap"
click 22 "#server-config"
click 23 "/guide/diagrams/lifecycle.html#controllers"
click 24 "/guide/diagrams/lifecycle.html#destroy"
click 25 "#server-index"
click 26 "/guide/diagrams/lifecycle.html#register"
click 27 "/guide/diagrams/lifecycle.html#routes"

click 31 "#components"
click 32 "#admin-index"
click 33 "#pages"
click 34 "#plugin-id"
click 35 "#translations"
click 36 "#utils"
click 361 ""/guide/plugin-guides/passing-data.html""
```

I have omitted some files for simplicity, but you can click on any of the boxes for more context. Full file structure can be viewed [here](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-file-structure-2-6)

# Server Config

This folder is responsible for handling the server configuration. This is how you load and validate the configuration inputted from user within your `./config/plugins.js`

You can get any of these config values wherever you can access the `strapi` object by doing this:
```js
strapi.config.get('plugin.{{your-plugin-slug}}.key.value')
```

> Remember you can do `yarn strapi console` to access the strapi object in a live console and you can type `strapi.config.get('plugin.{{your-plugin-slug}}')` to view your entire plugin's config

# Server Index

This is the entry point of your server; index and will export all of your different folders

# Admin Index

This is the entry point of your admin panel; This will export all of the different components that you have

# Components

This is where you will store your React components to use in `./pages`

# Pages

These will be all of your admin panel pages and tend to correspond with the leftward side tabs

# Plugin Id

This is a helper function to access your plugin id within the admin panel

# Translations

Storage for all of your I18n functions

# Utils

This contains any JS utility functions you may need.
