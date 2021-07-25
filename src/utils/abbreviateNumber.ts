const abbreviateNumber = (number: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
  ];
  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const formatToUse = lookup.slice().reverse().find((lookupData) => number >= lookupData.value);
  return formatToUse ? `${(number / formatToUse.value).toFixed(1).replace(regex, '$1')}${formatToUse.symbol}` : '0';
};

export default abbreviateNumber;
