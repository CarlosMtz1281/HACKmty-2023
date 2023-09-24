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

const completionConfigPrecise = async (messages, temperature = 0.2) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: messages,
    temperature: temperature,
  });
  return completion;
};

export async function askInputData(question) {
  const extraDescription =
    "Te preguntan acerca del llenado de datos para perfilación de usuario. Responde con términos fáciles de comprender para el usuario. Responde en pocas palabras.";
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

export async function transformInputData(question) {
  const extraDescription =
    "Recibes una string. Tienes que identificar el tiempo (puede estar en meses o años) y cantidad de dinero.";
  const responseType =
    "un número indicando la cantidad de meses y un número con solo digitos y un punto decimal, indicando la cantidad de dinero. En formato 'numeroMeses:dinero'. Donde numeroMeses y dinero son números y no contienen otros caracteres. Solo regresa 'numeroMeses:dinero' en la respuesta";

  const message = [
    {
      role: "system",
      content: generateSystemContext(false, extraDescription, responseType),
    },
    {
      role: "user",
      content: question,
    },
  ];
  return completionConfigPrecise(message, 0.3);
}

export async function giveInvestOptions(userContext) {
  const investOptions = JSON.stringify(data);
  const extraDescription = `Las opciones de inversión disponibles
  son las siguientes: ${investOptions}.`;
  const responseType =
    "una lista de todas las opciones de inversión (9 opciones en total), cada una con el nombre de la opción y el porcentaje de recomendación sobre 100, que sea recomendación muy optimista, ordenada de porcentaje mayor a menor, considerando el perfil del usuario. Retorna la lista separada por ';'. En formato 'nombre:porcentaje;'. El nombre sin parentesis. Si el mínimo de inversión es mayor a la cantidad de dinero, establecer compatibilidad de 0.";
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

  return completionConfigPrecise(message, 0.1);
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
};
