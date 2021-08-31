export const endPoint = {
    pemulihanEkonomiUrl : {v1:(process.env.REACT_APP_PEMULIHAN_EKONOMI_URL || "")+"api/pemulihan-ekonomi/"}
}

export const keys = {
    recaptcha : process.env.REACT_APP_RECAPTCHA_SITE_KEY || "",
    shakey : process.env.REACT_APP_ENC_SECRET || ""
}