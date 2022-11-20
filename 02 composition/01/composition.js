import { Tree } from "./tree.js";
import { Node } from './node.js';

// Konstruiere Baum
const tree = new Tree('Welt');
const root = tree.getRoot();

const china = new Node('china');
root.add(china);
const shanghai = new Node('shanghai');
china.add(shanghai);
const beijing = new Node('beijing');
china.add(beijing);

const usa = new Node('usa');
root.add(usa);
const sanfrancisco = new Node('San Francisco');
const newyork = new Node('New York');
usa.add(sanfrancisco);
usa.add(newyork);

export default root;
