import { Component, Element } from '@stencil/core';

declare var plugin: any;

@Component({
    tag: 'cordova-google-maps',
    styles: 'cordova-google-maps .map { width: 500px; height: 500px; max-width: 100%; max-height: 100%; display: block; }'
})
export class CordovaGoogleMaps {

    @Element() element: HTMLElement;

    mapElement: HTMLElement;

    map: any;

    componentDidLoad() {
        this.mapElement = this.element.querySelector('div.map') as HTMLElement;
        this.map = plugin.google.maps.Map.getMap(this.mapElement);
    }

    render() {
        return <div class="map"></div>;
    }
}