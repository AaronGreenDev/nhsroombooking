import React, {Component} from "react";
import M from 'materialize-css/dist/js/materialize.js'

class DropDown extends Component{



    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });
    }

    render() {
        return(
             <div className="row">
                <div className="col s12">
                <div className="input-field col s12 l4">
                    <select multiple>
                        <option value="" disabled>Select your Location</option>
                        <option value="1">Wolverhampton</option>
                        <option value="2">Walsall</option>
                        <option value="3">Bilston</option>
                    </select>
                    <label>Location Select</label>
                </div>

                 </div>
             </div>
        )

    }

}

export default DropDown
