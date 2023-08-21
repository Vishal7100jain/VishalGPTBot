import { config } from "dotenv"
config()

import OpenAI from "openai";
const openai = new OpenAI();


import readline from 'readline';

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


userInterface.prompt()
userInterface.on("line", async input => {

   let completion = await openai.chat.completions.create({
       messages: [{ role: "system", content: input }],
       model: "gpt-3.5-turbo",
   });

  console.log(completion.choices[0].message.content)


})





