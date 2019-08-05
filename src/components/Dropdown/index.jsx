import React, { createContext } from 'react';
import { brandContent } from './Brand';

export const dropDownContent = createContext();

class Dropdown extends React.Component {
  static contextType = brandContent;

  static globalBrand;

    state= {
      current_value: '',
      current_brand: '',
    }

     currentValue = (event) => {
       const { value } = event.target;

       this.setState({ current_value: value });

       if (this.globalBrand) {
         this.setState({ current_brand: this.globalBrand });
       }


       console.log(this.state.current_value);
     };


     render() {
       const { content } = this.props;
       try {
         const { current_brand } = this.context;
         this.globalBrand = current_brand;
       } catch (e) {
         console.error(e);
       }

       console.log(content);
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
