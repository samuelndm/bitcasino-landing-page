type FormatCurrencyType = {
  value: number;
  languageCode: string;
  currencyCode: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export const formatCurrency = ({
  value,
  languageCode,
  currencyCode,
  minimumFractionDigits,
  maximumFractionDigits,
}: FormatCurrencyType) => {
  return new Intl.NumberFormat(languageCode || "pt-BR", {
    style: "currency",
    currency: currencyCode || "BRL",
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
  }).format(value);
};
