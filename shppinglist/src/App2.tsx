import { useState } from 'react';
import  Container  from '@mui/material/Container';
import  AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddItem from './components/AddItem';
// 쇼핑 항목을 표시하는 목록 관련 컴포넌트들을 import
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import './App.css'

export type Item = {
  product: string;
  amount: string;
}

function App() {

  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([item, ...items]);
  }

  return (
    <>
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            장바구니
          </Typography>
        </Toolbar>
      </AppBar>
      <AddItem addItem={addItem}/>

      <List>
        {
          items.map((item, index) => // 두번째 argument를 넣어야지만 오류가 생기지 않음
            <ListItem key={index} divider>
              <ListItemText 
                primary={item.product}
                secondary={item.amount}>
                </ListItemText>
            </ListItem>
          )  
        }
      </List>

    </Container>
    </>
  )
}

export default App;
