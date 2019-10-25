import React from 'react';


class ListItem extends React.Component{
    render(){
        return(
            
                <div className="form-check">

                    <input className="form-check-input" type="radio" name="gridRadios"  value="option1" checked/>
                    <label className="form-check-label" for="gridRadios1">
                        First radio
                    </label>
               </div>
            
        );
    }
}

export default ListItem;