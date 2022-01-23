import { AppBar } from '@mui/material';
import { Search } from '..';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Search />
    </AppBar>
  );
};

export default Navbar;
