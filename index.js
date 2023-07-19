import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
    organization: "org-SP3C19z8pJYBtXqwtCMQWRPH ",
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  userInterface.prompt();
  userInterface.on("line", async (input) => {
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      })
      .then((res) => {
        console.log(res.data.choices[0].message.content);
        userInterface.prompt();
      })
      .catch((e) => {
        console.log(e);
      });
  });