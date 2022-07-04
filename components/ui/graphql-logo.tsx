// FRAMEWORK
import { createIcon, Icon } from "@chakra-ui/react";

// Context Type
interface CustomSvgIcon {
    loginUser: () => void;
    logoutUser: () => void;
    toggleColorState: () => void;
    userColorState: string;
    userId: string;
    userErrorMsg?: string;
    userName?: string;
  }

const GraphQlLogo = (props: any) => {
  const GraphQlLogoSvg = createIcon({
    displayName: "GraphQlLogo",
    viewBox: "0 0 400 400",
    path: [
      <path
        fill="currentColor"
        d="m57.468 302.66-14.376-8.3 160.15-277.38 14.376 8.3z"
      />,
      <path fill="currentColor" d="M39.8 272.2h320.3v16.6H39.8z" />,
      <path
        fill="currentColor"
        d="m206.348 374.026-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z"
      />,
      <path
        fill="currentColor"
        d="m54.482 132.883-8.3-14.375 160.21-92.5 8.3 14.375z"
      />,
      <path
        fill="currentColor"
        d="m342.568 302.663-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5z"
      />,
      <path fill="currentColor" d="M330.9 107.5h16.6v185h-16.6z" />,
      <path
        fill="currentColor"
        d="m203.522 367-7.25-12.558 139.34-80.45 7.25 12.557z"
      />,
      <path
        fill="currentColor"
        d="M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9"
      />,
    ],
  });

  return <Icon as={GraphQlLogoSvg} />;
};

export default GraphQlLogo;
