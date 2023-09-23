import { OpenAI } from "openai";

const openai = new OpenAI({apiKey: "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", dangerouslyAllowBrowser: true});

export default async function (animal) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: generatePrompt(animal) }],
    temperature: 0.6,
  });
  console.log(completion);
  
  return completion;
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
