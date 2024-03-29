import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { StyledBox } from "./styles";

type BoxProps<T extends keyof JSX.IntrinsicElements = "div"> = {
  as?: T;
  children?: ReactNode;
  onClick?: () => void;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
} & CSSProperties &
  Omit<HTMLAttributes<JSX.IntrinsicElements[T]>, "as">;

export default function Box({
  children,
  onClick,
  id,
  ref,
  as,
  ...props
}: BoxProps) {
  return (
    <StyledBox
      as={as}
      onClick={onClick}
      id={id}
      ref={ref}
      style={{ ...props }}
      display={props.display}
    >
      {children}
    </StyledBox>
  );
}
