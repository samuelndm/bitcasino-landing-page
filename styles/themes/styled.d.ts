import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      family: string;
    };

    navbar: {
      height: string;
      backgroudColor: string;
    };

    page: {
      backgroundColor: string;
    };
  }
}
