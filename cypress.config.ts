import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Define a custom task for writing to a CSV file
      on("task", {
        hello(message) {
          console.log(message);
        },
        writeCsv({ filename, content }) {
          const fs = require('fs');
          const path = require('path');

          // Define the path to the file
          const filePath = path.join(
            config.projectRoot,
            "cypress",
            "fixtures",
            filename
          );
          // create necessary files
          const dirPath = path.dirname(filePath);
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }
          // Write the content to the file
          fs.writeFileSync(filePath, content, "utf8");
          return null; // return null to indicate that the task was executed successfully
        },
      });
    },
  },
});
