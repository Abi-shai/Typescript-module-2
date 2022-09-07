// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number
    lng: number
  }
}

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

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: Number(mappable.location.lat),
        lng: Number(mappable.location.lng)
      }
    })
  }
}