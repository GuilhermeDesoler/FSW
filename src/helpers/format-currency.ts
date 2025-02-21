export const formatCurrency = (value: number) => new Intl.NumberFormat("pt", {style: "currency", currency: "BRL"}).format(value);
