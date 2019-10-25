import React from 'react';
import ListItem from './listItem';


class List extends React.Component{

    render(){
        return(
            <div>
              <ListItem/>
              <ListItem/>
              <ListItem/>
            </div>
        )
    }
}


export default List;