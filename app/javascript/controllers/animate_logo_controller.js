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

  // border(){
  //   this.logoTarget.classList.replace("static-logo", "animated")
  // }

  rotate(){
    console.log("rotatiiiing");
    // this.linkTarget.preventDefault();
    this.logoTarget.classList.replace("static-logo", "animated");
  }


}

  // preventDefault(event){
  //   event.preventDefault();
  // }
