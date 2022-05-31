import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["logo"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  rotate(){
    this.logoTarget.classList.replace("static-logo", "animated")
  }

}
