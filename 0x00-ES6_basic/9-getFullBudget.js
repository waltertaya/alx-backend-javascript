import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const getIncomeInDollars = (income) => `$${income}`;
  const getIncomeInEuros = (income) => `${income} euros`;
  return {
    ...budget,
    getIncomeInDollars,
    getIncomeInEuros,
  };
}
