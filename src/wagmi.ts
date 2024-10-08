import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";
import { config as dotenvConfig } from "dotenv";
dotenvConfig(); // Load environment variables

const PROJECT_ID = process.env.PROJECT_ID || "default_project_id";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: PROJECT_ID,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
