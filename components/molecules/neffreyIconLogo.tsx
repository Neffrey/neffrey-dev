// FRAMEWORK
import { createIcon, Icon } from "@chakra-ui/react";

// Context Type
interface CustomSvgIcon {
  displayName?: string;
}

// Component Function
const WordPressLogo: React.FC<CustomSvgIcon> = ({ displayName }) => {
  const WordPressIcon = createIcon({
    displayName: displayName || "Neffrey Icon Logo",
    viewBox: "0 0 300 300",
    path: [
      <path d="M276.2 23.73 23.8 276.13M150 23.73c15.81 8.31 53.94 60.33-.2 126.39" />,
      <path d="M276.2 261.32v14.81H23.8V23.73h252.4v14.71M150 149.93H23.8" />,
      <path d="M23.8 276.13V23.73l252.4 252.4V23.73" />,
    ],
  });

  return <Icon as={WordPressIcon} />;
};

export default WordPressLogo;
