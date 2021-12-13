import React from "react";
import { useApollo } from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import CryptocurrenciesProvider from "./CryptocurrenciesProvider";

type ProvidersProps = {
  children: React.ReactNode;
  pageProps: any;
};

const Providers = ({ children, pageProps }: ProvidersProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <CryptocurrenciesProvider>{children}</CryptocurrenciesProvider>;
    </ApolloProvider>
  );
};

export default Providers;
