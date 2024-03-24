import { IconProps } from ".";

export default function SearchIcon({ size, color }: Omit<IconProps, "type">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.72622 11.9146C5.72622 8.56374 8.4426 5.84737 11.7934 5.84737C15.1442 5.84737 17.8606 8.56374 17.8606 11.9146C17.8606 15.2654 15.1442 17.9817 11.7934 17.9817C8.4426 17.9817 5.72622 15.2654 5.72622 11.9146ZM11.7934 4.23199C7.55044 4.23199 4.11084 7.67159 4.11084 11.9146C4.11084 16.1575 7.55044 19.5971 11.7934 19.5971C13.6239 19.5971 15.3049 18.957 16.6246 17.8883L22.0253 23.289C22.3407 23.6044 22.8521 23.6044 23.1676 23.289C23.483 22.9736 23.483 22.4622 23.1676 22.1467L17.7669 16.7461C18.8357 15.4262 19.476 13.7452 19.476 11.9146C19.476 7.67159 16.0364 4.23199 11.7934 4.23199Z"
        fill={color}
      />
    </svg>
  );
}