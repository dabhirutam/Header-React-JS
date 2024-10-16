
const Menu = ({ menus }) => {

    return (
        <nav className="menus d-flex jst-cnt aln-cnt w-8">
            <ul className="d-flex">
                {
                    menus.map(menu => <li key={menu}><a href="#" className="link">{menu}</a></li>)
                }
            </ul>
        </nav>
    )
};

export default Menu;