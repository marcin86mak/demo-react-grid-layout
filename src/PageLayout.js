import React, {useState} from "react";
import {
    Collapse, DropdownItem, DropdownMenu, DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import {PageOne} from "./PageOne";


export const PageLayout = () => {
    const [toggleBar, setToggleBar] = useState(false);
    const [page, setPage] = useState('PageOne');
    const onToggleBar = () => setToggleBar(!toggleBar);
    const onClickPage = (_page) => () => setPage(_page);


    const Content = ({page}) => {
        switch (page) {
            case 'PageOne':
                return <PageOne/>
            case 'PageTwo':
                return <div className='mt-5 text-center'>NONE PAGE</div>
            default:
                return <div className='mt-5 text-center'>ERROR PAGE</div>
        }
    }

    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/" className={'ms-5 me-4'}>
                    www.x-plugin.pl
                </NavbarBrand>
                <NavbarToggler onClick={onToggleBar}/>
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/">
                                Components
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/marcin86mak/demo-react-grid-layout">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>
                        DEMO - demo-react-grid-layout
                    </NavbarText>
                </Collapse>
            </Navbar>
            <div className='border min-vh-100 menu-left'>
                <Nav vertical pills>
                    <NavItem active={page === 'PageOne'}>
                        <NavLink active={page === 'PageOne'} href="#" onClick={onClickPage('PageOne')}>
                            Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem active={page === 'PageTwo'}>
                        <NavLink active={page === 'PageTwo'} href="#" onClick={onClickPage('PageTwo')}>
                            Another Link
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className='min-vh-100 content'>
                <Content page={page}/>
            </div>
        </div>
    )
}