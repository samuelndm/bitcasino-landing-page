import { gql } from "@apollo/client";

export const getCryptocurrencyByCode = gql`
  query price($baseSymbol: String!) {
    markets(
      filter: {
        baseSymbol: { _eq: $baseSymbol }
        quoteSymbol: { _in: ["EUR"] }
        marketStatus: { _eq: Active }
      }
    ) {
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
