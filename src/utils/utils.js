import jwtDecode from "jwt-decode";
export const onlyAlpha = (text) => (text.replace(/[0-9\/]+/g, '').replace(/[-!$%^&*()_+|~=`{}[\]:";'<>?,.@#\/]/g, '').replace("\\", ''))
export const onlyNumeric = (text) => (text.replace(/[^0-9\/]+/g, '').replace(/[-!$%^&*()_+|~=`{}[\]:";'<>?,.@#\/]/g, '').replace("\\", ''))
export const verifyJWT = () =>{
    const access_token = localStorage.getItem("access_token")
    try {        
        const objToken = jwtDecode(access_token,{ header: true })
        return objToken
    } catch (error) {
        localStorage.removeItem('access_token')
        return undefined
    }
}