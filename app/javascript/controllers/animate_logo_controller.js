import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["logo", "link"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  border(){
    this.logoTarget.classList.replace("static-logo", "animated")
  }

  rotate(){
    console.log("preventDefault is working !")
    preventDefault(e);{
      e.preventDefault();
    }
    this.linkTarget.preventDefault();
  }

  preventDefault(event){
    event.preventDefault()
  }

}
