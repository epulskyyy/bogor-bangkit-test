/* eslint-disable no-script-url */
/* eslint-disable no-useless-escape */
import jwtDecode from "jwt-decode";
export const onlyAlpha = (text) =>
  text
    .replace(/[0-9\/]+/g, "")
    .replace(/[-!$%^&*()_+|~=`{}[\]:";'<>?,.@#\/]/g, "")
    .replace("\\", "");
export const onlyNumeric = (text) =>
  text
    .replace(/[^0-9\/]+/g, "")
    .replace(/[-!$%^&*()_+|~=`{}[\]:";'<>?,.@#\/]/g, "")
    .replace("\\", "");

export const onlyAlphaNumeric = (text) => text.replace(/[^A-Za-z0-9]/g, "");

export const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const getDataSession = () => {
  const access_token = localStorage.getItem("access_token");
  try {
    //checking jwt
    jwtDecode(access_token, { header: true });
    const data = jwtDecode(access_token);
    return data;
  } catch {
    localStorage.removeItem("access_token");
    return undefined;
  }
};

export const xssValid = (value) =>
  value.match(/(<[^>]*>)/g) != null ||
  value.toLowerCase().includes("javascript:") ||
  value.toLowerCase().includes("data:")
    ? Promise.reject("Teks tidak valid!")
    : Promise.resolve();

export const xssValidBool = (value) =>
  value.match(/(<[^>]*>)/g) != null ||
  value.toLowerCase().includes("javascript:") ||
  value.toLowerCase().includes("data:")
    ? false
    : true;


export const formatMoney = (num) => {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
};

export const capitalize = (str, allWord) => {
  const cap = (text) => `${text[0].toUpperCase()}${text.slice(1)}`
  return allWord ? str.split(' ').map(word => cap(word)).join(' ') : cap(str);
}
