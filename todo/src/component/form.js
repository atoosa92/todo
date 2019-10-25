import React from 'react';

class Form extends React.Component{
    render(){
        return(
            
                <div className="card">
                    <div className="card-body">

                         <div className="form-inline">
                        
                                <div className="form-group mx-md-3 mb-2">
                                   <input type="text" className="form-control" placeholder="todo"/>
                                </div>

                              <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
                         
                    </div>
                
                 </div>
            </div>
        
        );
    }
}

export default Form;