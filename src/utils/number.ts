export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const GetTotalAmountOfMoney = (data: Array<any>) => {
  let sum = 0;
  for (let item of data) {
    if (item.amount !== '') {
      sum += parseInt(item.amount);
    }
  }
  return formatNumber(sum);
};

export function FormatNumber(num: number, decimals: number) {
  var t = Math.pow(10, decimals);
  return (
    Math.round(
      num * t +
        (decimals > 0 ? 1 : 0) *
          (Math.sign(num) * (10 / Math.pow(100, decimals))),
    ) / t
  ).toFixed(decimals);
}
