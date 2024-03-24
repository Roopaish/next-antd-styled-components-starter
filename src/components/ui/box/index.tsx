import { CSSProperties } from "react";

type BoxProps = CSSProperties & {
  children?: React.ReactNode;
  onClick?: () => void;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
};

export default function Box({
  children,
  onClick,
  id,
  ref,
  ...props
}: BoxProps) {
  return (
    <div onClick={onClick} id={id} ref={ref} style={{ ...props }}>
      {children}
    </div>
  );
}
