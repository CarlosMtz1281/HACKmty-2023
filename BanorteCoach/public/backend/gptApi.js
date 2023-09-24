import { OpenAI } from "openai";
import data from "../data/fondos.json";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default async function (animal) {
  const message = [{ role: "user", content: generatePrompt(animal) }];

  return completionConfig(message);
}

const completionConfig = async (messages, temperature = 0.6) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: temperature,
  });
  return completion;
};

export async function askInputData(question) {
  const extraDescription =
    "Te preguntan acerca del llenado de datos para perfilación de usuario. Responde con términos fáciles de comprender para el usuario.";
  const message = [
    {
      role: "system",
      content: generateSystemContext(false, extraDescription, false),
    },
    {
      role: "user",
      content: question,
    },
  ];
  return completionConfig(message);
}

export async function giveInvestOptions(userContext) {
  const investOptions = JSON.stringify(data);
  const extraDescription = `Las opciones de inversión disponibles
  son las siguientes: ${investOptions}.`;
  const responseType =
    "una lista de opciones de inversión, cada una con el nombre de la opción y el porcentaje de relación con el perfil del usuario. Retorna la lista separada por ';'. En formato 'nombre:porcentaje;'";
  const message = [
    {
      role: "system",
      content: generateSystemContext(false, extraDescription, responseType),
    },
    {
      role: "user",
      content: userContext,
    },
  ];

  return completionConfig(message);
}

export async function explainSelectedInvestments(investOptions) {
  const extraDescription = `Te dan el perfil de un usuario y sus inversiones. Explica por qué las opciones son adecuadas para el usuario.`;
  const responseType =
    "una lista de explicaciones, cada una con el titulo de la inversion un ':' y la explicación. Retorna la lista separada por ';'";
  const message = [
    {
      role: "system",
      content: generateSystemContext(false, extraDescription, responseType),
    },
    {
      role: "user",
      content: investOptions,
    },
  ];

  return completionConfig(message);
}

const generateSystemContext = (
  userDescription = false,
  extraDescription = false,
  responseType = false
) => {
  let promptString = "Eres asesor de inversiones.";
  if (userDescription)
    promptString += `Estás hablando con: ${userDescription}, responde en términos apropiados para el usuario.`;

  if (extraDescription) promptString += extraDescription;
  if (responseType)
    promptString += `Tu respuesta tiene que ser ${responseType}.`;

  return promptString;
};

// function generatePrompt(animal) {
//   const capitalizedAnimal =
//     animal[0].toUpperCase() + animal.slice(1).toLowerCase();
//   return `Suggest three names for an animal that is a superhero.

// Animal: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// Animal: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// Animal: ${capitalizedAnimal}
// Names:`;
// }

export const extractLastMessage = (response) => {
  const finalMessage = response.choices[response.choices.length - 1].message;
  return finalMessage.content;
}

