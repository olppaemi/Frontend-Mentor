import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      basic: string;
    };
    palette: {
      red: string;
      green: string;
      blue: string;
      darkBlue: string;
      grayishBlue: string;
    };
  }
}
