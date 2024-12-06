import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuData } from './redux/features/menuSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.items);

  useEffect(() => {
    // Simulate fetching data
    const data = [
      { name: 'Item 1', link: '/item1' },
      { name: 'Item 2', link: '/item2' },
    ];
    dispatch(setMenuData(data));
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to FlexiRealm</h1>
      <Header />
      <Sidebar menu={menuItems} />
      <div>
        <p>Menu Items: {menuItems.length}</p>
        {menuItems.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
