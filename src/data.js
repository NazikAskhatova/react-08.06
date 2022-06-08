const ExchangeRate = {
  USDKGS: 89,
  EURKGS: 100,
  KGSUSD: 0.13,
}

export const getExchangeRate = (pair) => {
  return ExchangeRate[pair];
}
