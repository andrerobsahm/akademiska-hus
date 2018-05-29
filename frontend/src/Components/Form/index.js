import React from "react";
import Button from "../Button";
import "./index.css";

const Form = () => (
    <div className="form">
        <form action="" method="post" encType="multipart/form-data">
            <select>
                <option className="input-span" value="" disabled="disabled" selected="selected">Typ av skada</option>
                <option value="Vattenskada">Vattenskada</option>
            </select>

            <select>
                <option className="input-span" value="" disabled="disabled" selected="selected">Specificera skada</option>
                <option value="tak">Vattenläcka från tak</option>
                <option value="fönster">Vattenläcka från fönster</option>
            </select>

            <select>
                <option className="input-span" value="" disabled="disabled" selected="selected">Plats</option>
                <option value="Våning1">Våning 1</option>
                <option value="Våning2">Våning 2</option>
                <option value="Våning3">Våning 3</option>
            </select>

            <select>
                <option className="input-span" value="" disabled="disabled" selected="selected">Rum / Område</option>
                <option value="rum408a">Rum 408A</option>
                <option value="rum408b">Rum 408B</option>
                <option value="rum408c">Rum 408C</option>
                <option value="toalett">Toalett</option>
            </select>

            <br/>

            <textarea rows="7" placeholder="Beskriv skadan kort..."></textarea>

            <br/>

            <label className="imageUpload-label" htmlFor="imageUpload"><span className="input-span">Lägg till bild (frivilligt)</span></label>
            <input className="imageUpload" type="file" id="imageUpload" accept="image/*" />

            <p>Vill du följa ärendet?</p>
            <input className="input-span" type="text" name="email" placeholder="E-postadress" />
            <input className="input-span" type="text" name="phone" placeholder="Telefonnummer" />
            <Button className="button" title="Skicka in &rarr;" type="submit" />
        </form>
    </div>
);

export default Form;
