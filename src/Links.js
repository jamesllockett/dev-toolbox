import { RandomNumberGenerator } from "./Tools/RandomNumberGenerator/RandomNumberGeneratorComponent.js";
import { RandomStringGenerator } from "./Tools/RandomStringGenerator/RandomStringGeneratorComponent.js";
import { GuidGenerator } from "./Tools/GuidGenerator/GuidGeneratorComponent.js";
import { ColourConverter } from "./Tools/ColourConverter/ColourConverterComponent.js";
import { ListWrapper } from "./Tools/ListWrapper/ListWrapperComponent.js";

export const DevTools = {
  groups: [
    {
      name: "String Tools",
      tools: [
        {
          name: "Random String Generator",
          fragments: ["random-string-generator"],
          enabled: true,
          element: <RandomStringGenerator />,
        },
        {
          name: "Base64 Encoder",
          fragments: ["encode-base64"],
          enabled: false,
        },
        {
          name: "Base64 Decoder",
          fragments: ["decode-base64"],
          enabled: false,
        },
        {
          name: "List Wrapper",
          fragments: ["list-wrapper"],
          enabled: true,
          element: <ListWrapper />,
        },
      ],
    },
    {
      name: "Security",
      tools: [
        { name: "HASH", fragments: ["hash"], enabled: false },
        { name: "HMAC", fragments: ["hmac"], enabled: false },
        {
          name: "Password Generator",
          fragments: ["password-generator"],
          enabled: false,
        },
      ],
    },
    {
      name: "Graphical",
      tools: [
        {
          name: "RGB/HEX Colour converter",
          fragments: [
            "colour-converter",
            "color-converter",
            "colour-convertor",
            "color-convertor",
          ],
          enabled: true,
          element: <ColourConverter />,
        },
      ],
    },
    {
      name: "General",
      tools: [
        {
          name: "Random Number Generator",
          fragments: ["random-number-generator"],
          element: <RandomNumberGenerator />,
          enabled: true,
        },
        {
          name: "GUID Generator",
          fragments: ["guid-generator"],
          element: <GuidGenerator />,
          enabled: true,
        },
      ],
    },
  ],
};
