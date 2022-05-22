export class Helpers {
  hexToRGB = (hex) => {
    let parseString = hex;
    if (hex.startsWith('#')) {parseString = hex.slice(1, 7);}
    if (parseString.length !== 6) {return null;}
    const r = parseInt(parseString.slice(0, 2), 16);
    const g = parseInt(parseString.slice(2, 4), 16);
    const b = parseInt(parseString.slice(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) {return null;}
    return `${r}, ${g}, ${b}`;
  };
  changeDateFormat = (date) => {
    const dateObj = new Date(date);
    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    if (month < 10){ month = '0' + month;}
    if (day < 10){ day = '0' + day;}

    return `${day}/${month}/${year}`;
  }
}
