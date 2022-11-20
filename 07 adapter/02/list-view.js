export class ListView {
  static popupMenu(adapter) {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'popup_Menu');
    menu.innerHTML = adapter.createMenu();
    document.body.appendChild(menu);
  }
}
