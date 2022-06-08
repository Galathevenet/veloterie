import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["logo", "link"]

  connect() {
    console.log("Hello from our first Stimulus controller")
    this.clickListener = this.confirm.bind(this);
    this.element.addEventListener('click', this.clickListener);

  }
  disconnect() {
    this.element.removeEventListener('click', this.clickListener);
  }

  confirm(event) {
    event.preventDefault();
    console.log(event);
  }

  animation(){
    console.log("rotatiiiing");
    var current_rotation = 0;
    current_rotation += 360;
    this.logoTarget.style.transform = `rotate(${current_rotation}deg)`;
  }


}
