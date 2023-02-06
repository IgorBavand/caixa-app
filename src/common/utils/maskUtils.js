const formatarPreco = (valor) => {
  const preco = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "never",
  }).format(valor);
  return preco;
};

export { formatarPreco };
