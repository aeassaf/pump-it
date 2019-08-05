import React, { createContext } from 'react';

export const brandContent = createContext();

class Brands extends React.Component {
    state= {
      current_brand: '',
    }

     currentValue = (event) => {
       const { value } = event.target;

       this.setState({ current_brand: value });


       console.log(this.state.current_brand);
     };


     render() {
       const { content } = this.props;
       console.log(content);
       return (
         <brandContent.Provider value={{ ...this.state }}>
           <div>
             <select onChange={this.currentValue}>
               {content.map((val, index) => <option value={val} key={index}>{val}</option>)}
               {console.log(this.state)}
             </select>
           </div>
           {this.props.children}
         </brandContent.Provider>
       );
     }
}

export default Brands;
