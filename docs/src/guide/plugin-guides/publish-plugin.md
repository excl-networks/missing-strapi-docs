# How To Publish Your Plugin

## Turning your plugin into a git repo (Optional)

Within your terminal navigate into your plugin directory

```bash
cd src/plugins/your-plugin
```

From here you will init a new git repo

```bash
git init
```

Next you will want to add a `.gitignore` file, feel free to use [this](https://github.com/excl-networks/strapi-plugin-ezforms/blob/master/.gitignore)

Now you need to create a new GitHub repo (or gitlab, bitbucket etc). After you created your new repo you will need the URL.

_Create GitHub Repo with GitHub CLI_
```bash
gh repo create username/repo-name --public
```

Now add your remote, files and push

```bash
git remote add origin https://github.com/username/repo-name
git add .
git commit -m "your message"
git push origin master
```

Boom you now have your plugin on a GitHub repo

_PS: make sure you include a comprehensive README to help other people use your plugin_
## Publishing to NPM

First you need to go create an accounts at [npmjs](https://www.npmjs.com/)

Once this is done you will need to clean up your package.json within your plugin's directory.

Firstly you want to set an appropriate version number, you will increment this version number everytime you want to publish. You can start at `1.0.0` `0.0.0` `0.0.1` or whatever you want.

Next you will want to add you git repository so people can look at your code.

Add this to your package.json

```json
  "repository": {
    "type": "git",
    "url": "https://github.com/username/repo-name"
  },
```

After you `package.json` looks good you will then type 

```bash
npm publish
```

and follow the prompts, and Ta-Da your plugin is published

## Publish to Strapi Market

[Here](https://market.strapi.io/submit-plugin)
