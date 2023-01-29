import "styled-components";
import { defaultTheme } from "../Style/theme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
