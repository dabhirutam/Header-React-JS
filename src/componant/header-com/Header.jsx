import { Component } from 'react';
import Logo from './navs-com/Logo';
import Menu from './navs-com/Menu';
import Btn from './navs-com/Btn';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            menus: ['Home', 'About', 'Project', 'Blog', 'Contact']
        };
    };

    render() {

        return (
            <header>
                <div className="container">
                    <div className="row jst-btw aln-cnt">
                        <Logo />
                        <Menu menus={this.state.menus} />
                        <Btn />
                    </div>
                </div>
            </header>
        );
    };
};

export default Header;