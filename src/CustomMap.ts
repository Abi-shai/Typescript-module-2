import { User } from "./User"
import { Company } from "./Company"

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(reference: Element) {

    this.googleMap = new google.maps.Map(reference, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: Number(user.location.lat),
        lng: Number(user.location.lng)
      }
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: Number(company.location.lat),
        lng: Number(company.location.lng)
      }
    })
  }
}