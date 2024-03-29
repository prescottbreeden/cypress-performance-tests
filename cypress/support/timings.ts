export const createTimings = () => {
  let tests = {};
  let content = "";
  beforeEach(() => {
    const testName = Cypress.currentTest.title;
    tests[testName] = { commands: [] };

    Cypress.on("command:start", (command) => {
      tests[testName].commands.push({
        name: command.attributes.name,
        started: +new Date(),
      });
    });

    Cypress.on("command:end", (command) => {
      const testName = Cypress.currentTest.title;
      const currentTest = tests[testName];
      const lastCommand = currentTest.commands[currentTest.commands.length - 1];
      if (lastCommand.name === command.attributes.name) {
        lastCommand.endedAt = +new Date();
        lastCommand.elapsed = lastCommand.endedAt - lastCommand.started;
      }
    });
  });

  afterEach(() => {
    const testName = Cypress.currentTest.title;
    tests[testName].commands.forEach((commandInfo: any) => {
      content += `${testName},${commandInfo.name},${commandInfo.elapsed}\n`;
    });
  });
  after(() => {
    cy.task("writeCsv", { filename: "performance/spec_tests.csv", content });
  });
};
