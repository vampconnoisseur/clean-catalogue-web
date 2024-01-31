const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const IMAGES = [
  {
    type: "image_url",
    image_url: {
      url: "https://res.cloudinary.com/df3lxtjcl/image/upload/v1706621084/hqnz3aiowtfopakxlgc7.jpg",
    },
  },
  {
    type: "image_url",
    image_url: {
      url: "https://res.cloudinary.com/df3lxtjcl/image/upload/v1706621074/zeokmnmqw67qk3l4wuy2.jpg",
    },
  },
];

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "You are a system that always extracts information from an image in just a json_format",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Catalog Scoring Mechanism Parameters: Product Descriptions, Pricing Information, Product Images,Layout and Design, Discounts and Promotions, Brand Consistency, Contact Information and Call-to-Action,Typos and Grammar,Legal Compliance, AreaOfImprovement. Following image urls are the images of a catalogue and now use this mechanism and apply it to this catalogue and score between 0 and 100 in first 9 parameters and provide a helpful message for the 'AreaOfImprovement' parameter.",
          },
          ...IMAGES,
          //   {
          //     type: "image_url",
          //     image_url: {
          //       url: "https://res.cloudinary.com/df3lxtjcl/image/upload/v1706621084/hqnz3aiowtfopakxlgc7.jpg",
          //     },
          //   },
          //   {
          //     type: "image_url",
          //     image_url: {
          //       url: "https://res.cloudinary.com/df3lxtjcl/image/upload/v1706621074/zeokmnmqw67qk3l4wuy2.jpg",
          //     },
          //   },
        ],
      },
    ],
    max_tokens: 200,
  });

  let result = response.choices[0].message.content;
  console.log(result);

  const gptResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0613",
    messages: [
      {
        role: "user",
        content:
          "Extract the properties from this object" +
          result +
          "and based upon that call createResponseObject function.",
      },
    ],
    functions: [
      {
        name: "createResponseObject",
        parameters: {
          type: "object",
          properties: {
            ProductDescriptions: {
              type: "integer",
            },
            PricingInformation: {
              type: "integer",
            },
            ProductImages: {
              type: "integer",
            },
            LayoutAndDesign: {
              type: "integer",
            },
            DiscountsAndPromotions: {
              type: "integer",
            },
            BrandConsistency: {
              type: "integer",
            },
            ContactInformationAndCallToAction: {
              type: "integer",
            },
            TyposAndGrammar: {
              type: "integer",
            },
            LegalCompliance: {
              type: "integer",
            },
            areaOfImprovement: {
              type: "string",
            },
          },
          required: [
            "ProductDescriptions",
            "PricingInformation",
            "ProductImages",
            "LayoutAndDesign",
            "DiscountsAndPromotions",
            "BrandConsistency",
            "ContactInformationAndCallToAction",
            "TyposAndGrammar",
            "LegalCompliance",
          ],
        },
      },
    ],
    function_call: { name: "createResponseObject" },
  });

  const functionCall = gptResponse.choices[0].message.function_call;
  const json = JSON.parse(functionCall.arguments);

  console.log(json);

  //   console.log(json.BrandConsistency);
  //   console.log(json.ContactInformationAndCallToAction);
  //   console.log(json.DiscountsAndPromotions);
  //   console.log(json.LayoutAndDesign);
  //   console.log(json.LegalCompliance);
  //   console.log(json.PricingInformation);
  //   console.log(json.ProductDescriptions);
  //   console.log(json.ProductImages);
  //   console.log(json.TyposAndGrammar);
}
main();
