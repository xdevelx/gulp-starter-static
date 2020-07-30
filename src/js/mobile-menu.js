class MobileMenu {
  constructor() {
    this.show = true;
  }

  init = () => {
    this.name = 'Vasya';
    setTimeout(() => {
      console.log(this);
    }, 500);
  }
}

export default MobileMenu;
