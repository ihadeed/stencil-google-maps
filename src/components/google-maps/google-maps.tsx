import {Component , Listen, Prop} from '@stencil/core';


@Component({
  tag: 'google-maps',
  styleUrl: 'google-maps.scss'
})
export class GoogleMaps {

  // must be 2 to proceed
  __readyState: number = 0;

  @Prop() key: string;

  componentWillLoad() {
    console.log('component will load fired');
  }

  private get scriptUrl(): string {
    return `https://maps.googleapis.com/maps/api/js?key=${ this.key }&callback=initMap`;
  }

  componentDidLoad() {
      console.log('The view has been rendered');
      this.__readyState++;
      if (this.__readyState === 2) this.injectJS();

  }

  @Listen('window:load')
  onWindowLoad(): void {
    console.log('Window load fired');
    window['initMap'] = () => console.log('initMap called');
      this.__readyState++;
      if (this.__readyState === 2) this.injectJS();
  }

  private injectJS(): void {
    const scriptElement: HTMLScriptElement = document.createElement('script');
    scriptElement.async = true;
    scriptElement.defer = true;
    scriptElement.src = this.scriptUrl;
    (this as any).__el.appendChild(scriptElement);
  }

  render() {
    return (
      [
        <p>JS google map</p>,
        <div id="map"></div>
      ]
    );
  }
}