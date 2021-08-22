export const onlyAlpha = (text) => (text.replace(/[0-9\/]+/g, '').replace(/[-!$%^&*()_+|~=`{}[\]:";'<>?,.@#\/]/g, '').replace("\\", ''))
export const onlyNumeric = (text) => (text.replace(/[^0-9\/]+/g, '').replace(/[-!$%^&*()_+|~=`{}[\]:";'<>?,.@#\/]/g, '').replace("\\", ''))
