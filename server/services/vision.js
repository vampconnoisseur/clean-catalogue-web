const OpenAI = require("openai");
require('dotenv').config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

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
                    }
                ]
            },
            {
                role: "user",
                content: [

                    { type: "text", text: "Catalog Scoring Mechanism Parameters: Product Descriptions : Assess the clarity and accuracy of product descriptions. Pricing Information : Evaluate if pricing is clearly displayed and consistent throughout.  Product Images : Consider the quality and relevance of the product images.  Layout and Design : Judge the overall aesthetic appeal and ease of navigation. Discounts and Promotions : Review visibility and clarity of any discounts or special offers.  Brand Consistency : Ensure consistent use of colors, fonts, and logos aligning with the brand identity.  Contact Information and Call-to-Action : Check for visible and accurate contact details and clear call-to-action elements.  Typos and Grammar : Scan for any spelling or grammatical errors.  Legal Compliance : Verify if the catalog meets industry-specific legal requirements, such as disclaimers and consumer rights information. Now the given image is a single image of two page catalogue and now use this mechanism and apply it to this catalogue and score between 0 and 1 in each of the 9 parameters. No need to provide any review message, just provide the scores for each parameter." },
                    {
                        type: "image_url",
                        image_url: {
                            "url": "https://img.freepik.com/free-vector/hand-drawn-product-catalog-template_23-2149853537.jpg?w=2000&t=st=1706203967~exp=1706204567~hmac=4aa8a84ba9be6b6b3ae7cafea8a2572273d911db695178fe560402523fe001a2",
                        },
                    },
                ],
            },
        ],
        max_tokens: 150,
    });

    let result = response.choices[0].message.content;
    console.log(result);


    const gptResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0613",
        messages: [
            {
                role: "user",
                content: "Extract the properties from this object" + result + "and based upon that call createResponseObject function."
            }
        ],
        functions: [
            {
                name: "createResponseObject",
                parameters: {
                    type: "object",
                    properties: {
                        ProductDescriptions: {
                            type: "integer"
                        },
                        PricingInformation: {
                            type: "integer"
                        },
                        ProductImages: {
                            type: "integer"
                        },
                        LayoutAndDesign: {
                            type: "integer"
                        },
                        DiscountsAndPromotions: {
                            type: "integer"
                        },
                        BrandConsistency: {
                            type: "integer"
                        },
                        ContactInformationAndCallToAction: {
                            type: "integer"
                        },
                        TyposAndGrammar: {
                            type: "integer"
                        },
                        LegalCompliance: {
                            type: "integer"
                        },

                    },
                    required: ["ProductDescriptions", "PricingInformation", "ProductImages", "LayoutAndDesign", "DiscountsAndPromotions", "BrandConsistency", "ContactInformationAndCallToAction", "TyposAndGrammar", "LegalCompliance"]
                }
            }
        ],
        function_call: { name: "createResponseObject" }
    });

    const functionCall = gptResponse.choices[0].message.function_call;
    const json = JSON.parse(functionCall.arguments);

    console.log(json);

    console.log(json.BrandConsistency);
    console.log(json.ContactInformationAndCallToAction);
    console.log(json.DiscountsAndPromotions);
    console.log(json.LayoutAndDesign);
    console.log(json.LegalCompliance);
    console.log(json.PricingInformation);
    console.log(json.ProductDescriptions);
    console.log(json.ProductImages);
    console.log(json.TyposAndGrammar);
}
main();

