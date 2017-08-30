import {Component, Element, Prop} from '@stencil/core';

declare const cordova: any;

@Component({
    tag: 'hybrid-google-maps'
})
export class HybridGoogleMaps {

    @Prop() key: string;
    @Element() element: HTMLElement;

    async componentDidLoad() {
        const isCordovaAvailable = await this.isCordovaAvailable();
        if (isCordovaAvailable) {
            this.element.innerHTML = `<cordova-google-maps></cordova-google-maps>`;
        } else {
            this.element.innerHTML = `<google-maps key="${ this.key }"></google-maps>`;
        }
    }

    private isCordovaAvailable(): Promise<boolean> {
        return new Promise<boolean>((resolve: Function) => {
            if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
                document.addEventListener('deviceready', () => {
                    console.log('Device ready fired');
                    resolve(typeof cordova !== 'undefined');
                });
            } else {
                resolve(false);
            }
        });
    }

    render() {
        return;
    }
}