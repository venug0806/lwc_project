import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import bulma from '@salesforce/resourceUrl/bulma';
export default class BulmaComp extends LightningElement {
    connectedCallback() {
        loadStyle(this, bulma);
    }
}