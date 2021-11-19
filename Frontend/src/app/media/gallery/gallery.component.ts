import { Component } from "@angular/core";
@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent {
  currentIndex: any = -1;
  showFlag: any = false;

  imageObject: Array<object> = [
    {
      image: "assets/images/image-gallery/1.jpg",
      thumbImage: "assets/images/image-gallery/1.jpg",
      title: "Image 1",
    },
    {
      image: "assets/images/image-gallery/2.jpg",
      thumbImage: "assets/images/image-gallery/2.jpg",
      title: "Image 2",
    },
    {
      image: "assets/images/image-gallery/3.jpg",
      thumbImage: "assets/images/image-gallery/3.jpg",
      title: "Image 3",
    },
    {
      image: "assets/images/image-gallery/4.jpg",
      thumbImage: "assets/images/image-gallery/4.jpg",
      title: "Image 4",
    },
    {
      image: "assets/images/image-gallery/5.jpg",
      thumbImage: "assets/images/image-gallery/5.jpg",
      title: "Image 5",
    },
    {
      image: "assets/images/image-gallery/6.jpg",
      thumbImage: "assets/images/image-gallery/6.jpg",
      title: "Image 6",
    },
    {
      image: "assets/images/image-gallery/7.jpg",
      thumbImage: "assets/images/image-gallery/7.jpg",
      title: "Image 7",
    },
    {
      image: "assets/images/image-gallery/8.jpg",
      thumbImage: "assets/images/image-gallery/8.jpg",
      title: "Image 8",
    },
    {
      image: "assets/images/image-gallery/9.jpg",
      thumbImage: "assets/images/image-gallery/9.jpg",
      title: "Image 9",
    },
    {
      image: "assets/images/image-gallery/10.jpg",
      thumbImage: "assets/images/image-gallery/10.jpg",
      title: "Image 10",
    },
    {
      image: "assets/images/image-gallery/11.jpg",
      thumbImage: "assets/images/image-gallery/11.jpg",
      title: "Image 11",
    },
    {
      image: "assets/images/image-gallery/12.jpg",
      thumbImage: "assets/images/image-gallery/12.jpg",
      title: "Image 12",
    },
  ];

  showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }
}
