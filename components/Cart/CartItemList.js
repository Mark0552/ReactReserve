import { Header, Segment, Button, Icon } from 'semantic-ui-react'

function CartItemList() {
  const user = false;
  
  return (
    <Segment secondary color='teal' inverted textAlign='center' placeholder>
      <Header icon>
        <Icon name='shopping basket'/>
        No Products In Cart
      </Header>
      <div>
        {user ? (
          <Button color='orange'>
            View Products
          </Button>
        ) : (
          <Button color='blue'>
            Log In To Add Products
          </Button>
        )}
      </div>
    </Segment>
  )
}

export default CartItemList;
