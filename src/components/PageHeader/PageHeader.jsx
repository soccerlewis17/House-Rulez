import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

function PageHeader({handleLogout}) {
    return ( 
        <Segment>
            <Header textAlign="left">
                <Link to='/'>
                    <Image src='https://i.imgur.com/peOijUu.png'></Image>
                </Link>
            </Header>
            <Header as="h2" textAlign="center">
                <Link to='/'>House Rulez</Link>
            </Header>
            <Header as="h2" textAlign="right">
                <Link to='/'>
                    <Icon name="home"></Icon>
                </Link>
                <Link to='' onClick={handleLogout}>Logout</Link>
            </Header>
        </Segment>
     );
}

export default PageHeader;