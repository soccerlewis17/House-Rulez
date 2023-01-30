
import { Header, Segment, Image, Icon } from "semantic-ui-react";

function PageHeader() {
    return ( 
        <Segment>
            <Header as="h2" textAlign="left">
                <Image src='https://i.imgur.com/peOijUu.png'></Image>
            </Header>
            <Header as="h2" textAlign="center">
                House Rulez
            </Header>
            <Header as="h2" textAlign="right">
                <Icon name="home"></Icon>
                Logout
            </Header>
        </Segment>
     );
}

export default PageHeader;