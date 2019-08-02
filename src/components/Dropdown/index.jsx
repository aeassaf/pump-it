import React, { createContext } from 'react';

export const dropDownContent = createContext();

class Dropdown extends React.Component {
    state= {
      current_value: '',
    }

     currentValue = (event) => {
       const { value } = event.target;
       this.setState({ current_value: value });
       console.log(this.state.current_value);
     };


     render() {
       const { content } = this.props;
       return (
         <dropDownContent.Provider value={{ ...this.state }}>
           <div>
             <select onChange={this.currentValue}>
               {content.map((val, index) => <option value={val} key={index}>{val}</option>)}
               {console.log(this.state)}
             </select>
           </div>
           {this.props.children}
         </dropDownContent.Provider>
       );
     }
}

export default Dropdown;
