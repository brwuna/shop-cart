const formatCurrency = (value, currency) => {
  return value.toLocaleString('pt-Br', {
    style: 'currency',
    currency,
  })
}

export default formatCurrency
