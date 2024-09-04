module.exports = function (plop) {
  plop.setGenerator("component", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/styles.hbs",
      },
      {
        type: "modify",
        path: "src/components/index.js",
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template: "import { {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}'\n$1",
      },
      {
        type: "modify",
        path: "src/components/index.js",
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: "\t{{pascalCase name}},\n$1",
      },
    ],
  });

  plop.setGenerator("view", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "View Name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/views/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/view.hbs",
      },
      {
        type: "add",
        path: "src/views/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/styles.hbs",
      },
    ],
  });

  plop.setGenerator("provider", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Provider name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/providers/{{pascalCase name}}/{{pascalCase name}}.provider.jsx",
        templateFile: "plop-templates/provider.hbs",
      },
    ],
  });
};
