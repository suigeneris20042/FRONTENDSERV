import "@/assets/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Verifica si la página tiene un layout personalizado
  const getLayout = Component.getLayout || ((page) => page);

  // Renderiza la página con su layout, o sin layout si no está definido
  return getLayout(<Component {...pageProps} />);
}
