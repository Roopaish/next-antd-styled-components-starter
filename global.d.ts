import "styled-components"

import { StyledComponentsTheme } from "./src/theme"

declare module "styled-components" {
  export interface DefaultTheme extends StyledComponentsTheme {}
}
