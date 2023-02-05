import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon, MenuItem, Menu } from "semantic-ui-react";

function PageHeader({handleLogout}) {
    return ( 
            <Menu color='red' inverted columns={10}>
                <Menu.Item as="h2" verticalAlign='middle'>
                    <Link to='/'>
                        <Image size='tiny' src='https://i.imgur.com/peOijUu.png'></Image>
                        House Rulez
                    </Link>
                </Menu.Item>
                <Menu.Item as="h2" position="right" verticalAlign='middle'>
                    <Link to='/'>
                        <Icon name="home"></Icon>
                    </Link>
                </Menu.Item>
                <Menu.Item as="h2" position="right" verticalAlign='middle'>
                    <Link to='' onClick={handleLogout}>Logout</Link>
                </Menu.Item>
            </Menu>
     );
}

export default PageHeader;