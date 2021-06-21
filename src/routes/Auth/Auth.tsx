import {Helmet} from "react-helmet-async";
import '../../styles/base.scss'
import BacAuth from '../../assets/peb-bac-auth.svg'

const Auth: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Mekar.id - Login</title>
            </Helmet>
            <div className="peb-container-auth">
                <div className="peb-container-auth-background">
                    <h3>E-Commerce</h3>
                    <div className="peb-card">
                        <div className="peb-card-body">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;
