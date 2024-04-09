import { CSSProperties, ReactNode } from "react";
import { StyledBox, StyledBoxProps } from "./styles";

type BoxProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  onClick?: () => void;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
} & Omit<CSSProperties, "display"> &
  StyledBoxProps;

export default function Box({
  children,
  onClick,
  id,
  ref,
  as,
  display,
  ...props
}: BoxProps) {
  return (
    <StyledBox
      as={as}
      onClick={onClick}
      id={id}
      ref={ref}
      style={{ ...props }}
      display={display}
    >
      {children}
    </StyledBox>
  );
}
