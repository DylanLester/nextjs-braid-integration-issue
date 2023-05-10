import "braid-design-system/reset";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import apacTheme from "braid-design-system/themes/apac";
import { BraidProvider } from "braid-design-system";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BraidProvider theme={apacTheme}>
      <Component {...pageProps} />
    </BraidProvider>
  );
}
