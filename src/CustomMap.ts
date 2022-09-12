import { faker } from "@faker-js/faker"
// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
}

export class CustomMap {
  private googleMap: google.maps.Map
  name: string

  constructor(reference: Element) {
    this.name = faker.name.firstName()
    this.googleMap = new google.maps.Map(reference, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: Number(mappable.location.lat),
        lng: Number(mappable.location.lng)
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}