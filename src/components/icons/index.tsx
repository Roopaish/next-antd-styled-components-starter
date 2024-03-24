import SearchIcon from "./search.icon";

export default function Icon({
  type,
  color = "currentColor",
  size = 28,
}: IconProps) {
  return (
    <>
      {
        {
          search: <SearchIcon size={size} color={color} />,
        }[type]
      }
    </>
  );
}

export type IconType = "search";

export type IconProps = {
  type: IconType;
  size?: number;
  color?: string;
};
