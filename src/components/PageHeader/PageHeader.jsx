
import { Header, Segment, Image, Icon } from "semantic-ui-react";

function PageHeader() {
    return ( 
        <Segment>
            <Header as="h2" floated="right">
                <Icon name="home"></Icon>
                Logout
            </Header>
            <Header as="h2" floated="left">
                <Image src='https://i.imgur.com/peOijUu.png'></Image>
            </Header>
        </Segment>
     );
}

export default PageHeader;