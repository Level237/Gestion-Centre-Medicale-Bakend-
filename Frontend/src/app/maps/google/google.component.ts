import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from "@angular/core";

import { MapsAPILoader } from "@agm/core";

import { isPlatformBrowser } from "@angular/common";
@Component({
  selector: "app-google",
  templateUrl: "./google.component.html",
  styleUrls: ["./google.component.scss"],
})
export class GoogleComponent implements OnInit {
  latitude = 23.00325;
  longitude = 72.66324;
  markers: any;

  @ViewChild("streetviewMap", { static: true }) streetviewMap: any;
  @ViewChild("panoramaMap", { static: true }) panoramaMap: any;

  // bread crumb items
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit(): void {
    this.markerData();
    this.initStreetViewMap();
  }

  initStreetViewMap() {
    if (isPlatformBrowser(this.platformId)) {
      this.mapsAPILoader.load().then(() => {
        const center = { lat: 23.02482, lng: 72.55991 };
        const map = new window["google"].maps.Map(
          this.streetviewMap.nativeElement,
          {
            center,
            zoom: 12,
            scrollwheel: false,
          }
        );
        const panorama = new window["google"].maps.StreetViewPanorama(
          this.panoramaMap.nativeElement,
          {
            position: center,
            pov: { heading: 34, pitch: 10 },
            scrollwheel: false,
          }
        );
        map.setStreetView(panorama);
      });
    }
  }

  private markerData() {
    this.markers = [
      {
        latitude: 23.00325,
        longitude: 72.66324,
      },
      {
        latitude: 23.02235,
        longitude: 72.570961,
      },
      {
        latitude: 23.01656,
        longitude: 72.5322,
      },
    ];
  }
}
