const hexToRgba = (hex: string, opacity = 1) => {
  if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
    let r = '0';
    let g = '0';
    let b = '0';
    if (hex.length === 4) {
      r = `0x${hex[1]}${hex[1]}`;
      g = `0x${hex[2]}${hex[2]}`;
      b = `0x${hex[3]}${hex[3]}`;
    } else {
      r = `0x${hex[1]}${hex[2]}`;
      g = `0x${hex[3]}${hex[4]}`;
      b = `0x${hex[5]}${hex[6]}`;
    }
    return `rgba(${+r},${+g},${+b},${opacity})`;
  }
  throw new Error('Bad hex format');
};

export default hexToRgba;
