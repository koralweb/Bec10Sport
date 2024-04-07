import HomeScreen from './HomeScreen';
import ShopScreen from './ShopScreen';
import BookingScreen from './BookingScreen';
import BookingSuccessScreen from './BookingSuccessScreen';

const screensList = [
  {
    name: 'Home',
    screen: HomeScreen,
    showInMenu: true,
    title: 'Главная',
  },
  {
    name: 'Shop',
    screen: ShopScreen,
    showInMenu: true,
    title: 'Меню',
  },
  {
    name: 'Booking',
    screen: BookingScreen,
    showInMenu: true,
    title: 'Резерв стола',
  },
  {
    name: 'BookingSuccess',
    screen: BookingSuccessScreen,
    showInMenu: false,
    title: 'пусто',
  },
];

export default screensList;
