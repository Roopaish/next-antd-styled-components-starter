import { ThemeConfig } from "antd/es/config-provider/context";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeConfig {}
}
