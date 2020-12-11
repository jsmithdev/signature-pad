import { api, LightningElement } from 'lwc';

import Signature from './signature_pad'

export default class SignaturePad extends LightningElement {

    /**
     * (String) Set width of canvas to sign on
     */
    @api width

    /**
     * (String) Set height of canvas to sign on
     */
    @api height

    /**
     * (String) Color used to clear the background. Can be any color format accepted by context.fillStyle. Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)" (opaque white) if you'd like to save signatures as JPEG images.
     */
    @api backgroundColor = 'rgb(255,255,255)';

    /**
     * (String) Color used to draw the lines. Can be any color format accepted by context.fillStyle. Defaults to "black".
     */
    @api penColor = 'rgb(0,0,0)';

    /**
     *  Draws signature image from data URL.
     *  NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
     *  this.signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");
     */
    @api existingSignature = undefined;

    /**
     * 
     * @param {String} type -  Defaults to PNG; Options: blank || 'image/jpeg' || 'image/svg+xml'
     */
    @api
    toDataURL(type = ''){

        return this.signaturePad.toDataURL(type)
    }

    /**
     * Returns signature image as an array of point groups
     */
    @api
    toData(){

        return this.signaturePad.toData()
    }

    /**
     * Returns signature image as an array of point groups
     */
    @api
    isEmpty(){

        return this.signaturePad.isEmpty()
    }

    /**
     * Clears the canvas
     */
    @api
    clear(){
        return this.signaturePad.clear(); 
    }
    
    /**
     * Unbinds all event handlers
     */
    @api
    off(){
        return this.signaturePad.off()
    }

    /**
     * Rebinds all event handlers
     * - attach == on 
     */
    @api
    attach(){
        return this.signaturePad.on()
    }

    renderedCallback() {

        if(this.width){ this.template.style.width = this.width }
        if(this.height){ this.template.style.height = this.height }
        
        this.signaturePad = new Signature( this.template.querySelector("canvas"), {
            penColor: this.penColor,
            backgroundColor: this.backgroundColor,
        })

        if(this.existingSignature){

            // Draws signature image from data URL.
            // NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
            this.signaturePad.fromDataURL(this.existingSignature)
        }
    }
}