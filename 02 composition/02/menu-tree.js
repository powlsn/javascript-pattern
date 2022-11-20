import { MenuItem } from './menu-item.js';

const root = new MenuItem("");

// Books
const books = new MenuItem("Books");
root.add(books);
const childMenu01_1 = new MenuItem('Das Leben ist schön');
const childMenu01_2 = new MenuItem('Rosamunde Pilcher');
const childMenu01_3 = new MenuItem('Der Narr in dir');
const childMenu01_4 = new MenuItem('Unter der Sonne');
books.add(childMenu01_1);
books.add(childMenu01_2);
books.add(childMenu01_3);
books.add(childMenu01_4);

// Code
const codes = new MenuItem('Code');
root.add(codes);
const childMenu02_1 = new MenuItem('Python');
const childMenu02_2 = new MenuItem('Java');
const childMenu02_3 = new MenuItem('C#');
const childMenu02_4 = new MenuItem('Delphi');
codes.add(childMenu02_1);
codes.add(childMenu02_2);
codes.add(childMenu02_3);
codes.add(childMenu02_4);

export default root;
