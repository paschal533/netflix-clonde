
import { Header } from '../components';
import * as Router from '../constants/routes';
import Logo from '../logo.svg';

export function HeaderContainer({ children }) {
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={Router.HOME} alt="netflix" src={Logo}/>
                <Header.ButtonLink to={Router.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
