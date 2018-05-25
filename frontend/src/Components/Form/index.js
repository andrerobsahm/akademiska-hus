import React from "react";
import Button from "../Button";
import "./index.css";

const Form = () => (
    <div className="">
        <form action="" method="post" encType="multipart/form-data">
            <select>
                <option value="all" defaultValue="selected">Typ av skada</option>
                <option value="Vattenskada">Vattenskada</option>
                <option value="Trasig lampa">Trasig lampa</option>
            </select>
            <select>
                <option value="all" defaultValue="selected">Specificera</option>
                <option value="X">X</option>
                <option value="XX">XX</option>
            </select>
            <select>
                <option value="all" defaultValue="selected">Plats</option>
                <option value="Våning1">Våning 1</option>
                <option value="Våning2">Våning 2</option>
                <option value="Våning3">Våning 3</option>
            </select>
            <br/>
            <textarea rows="6" placeholder="Beskriv skadan kort..."></textarea>
            <label htmlFor="imageUpload">lägg till bild (frivilligt)
                <input className="imageUpload" type="file" id="imageUpload" accept="image/*" />
            </label>

            <p>Vill du följa ärendet?</p>
            <input type="email" name="email" placeholder="E-postadress" />
            <input type="tel" name="phone" placeholder="Telefonnummer" />

            <Button className="button" title="Skicka in" type="submit" />
        </form>
    </div>
);

export default Form;
