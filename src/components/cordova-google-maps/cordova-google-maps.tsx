import { Component, Element } from '@stencil/core';

declare var plugin: any;

@Component({
    tag: 'cordova-google-maps',
    styleUrl: 'cordova-google-maps.scss'
})
export class CordovaGoogleMaps {

    @Element() element: HTMLElement;

    mapElement: HTMLElement;

    map: any;

    componentDidLoad() {
        this.mapElement = this.element.querySelector('div.map') as HTMLElement;
        this.map = plugin.google.maps.Map.getMap(this.mapElement, {
            camera : {
                target: {
                    lat: 37.422375,
                    lng: -122.084207
                },
                zoom: 10
            }
        });
        this.map.one(plugin.google.maps.event.MAP_READY, () => console.log('Map is ready'));
    }

    render() {
        return <div class="map"></div>;
    }
}