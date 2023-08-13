export const formatCurrency = (value, currency) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency, minimumFractionDigits: 2});
}