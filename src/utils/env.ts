export const endPoint = {
    pemulihanEkonomiUrl : {v1:(process.env.REACT_APP_PEMULIHAN_EKONOMI_URL || "")+"api/pemulihan-ekonomi/"},
    messagingUrl : {v1:(process.env.REACT_APP_MESSAGING_URL || "")+"api/v1/"}
}

export const keys = {
    recaptcha : process.env.REACT_APP_RECAPTCHA_SITE_KEY || "",
    shakey : process.env.REACT_APP_ENC_SECRET || ""
}