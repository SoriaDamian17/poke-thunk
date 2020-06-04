import React, {useEffect} from 'react';
import Logo from '../Logo';

import './Layout.scss';

const Layout = (props) => {

    const { title, children } = props;

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <div className="layout">
            <Logo width={250} height={250}/>
            {children}
        </div>
    );
};

export default Layout;