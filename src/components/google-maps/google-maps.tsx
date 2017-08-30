import { Component, Element, Listen, Prop } from '@stencil/core';


@Component({
    tag: 'google-maps',
    styleUrl: 'google-maps.scss',
    shadow: true
})
export class GoogleMaps {

    @Prop() key: string;

    @Element() element: HTMLElement;

    mapElement: HTMLElement;

    map: google.maps.Map;

    private get scriptUrl(): string {
        return `https://maps.googleapis.com/maps/api/js?key=${ this.key }&callback=initMap`;
    }

    @Listen('window:load')
    onWindowLoad(): void {
        this.registerInitMapCallback();
        this.injectJS();
    }

    private onSDKReady(): void {
        this.mapElement = this.element.querySelector('div.map') as HTMLElement;
        this.map = new google.maps.Map(this.mapElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }

    private registerInitMapCallback(): void {
        window['initMap'] = this.onSDKReady.bind(this);
    }

    private injectJS(): void {
        const scriptElement: HTMLScriptElement = this.element.querySelector('script');
        scriptElement.async = true;
        scriptElement.defer = true;
        scriptElement.src = this.scriptUrl;
    }

    render() {
        return [
          <div class="map"></div>,
          <script></script>
        ];
    }
}