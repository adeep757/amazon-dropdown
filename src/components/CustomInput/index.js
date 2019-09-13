import React, { Component } from 'react';
import './index.css';
import Chip from '../Chip';
import ListItem from '../ListItem';
import Dropdown from '../Dropdown';

class CustomInput extends Component {
    state = {
        showListItems:false,
        keyCount:0,

        inputText:'',
        selectedItems: [],
        itemsInList: [
           
        ],
        defaultItems:[ { name: 'Ben Stokes', email: 'ben@gmail.com' },
        { name: 'Mark Pete', email: 'mark@gmail.com' },
        { name: 'James Corden', email: 'james@gmail.com' },
        { name: 'Jason Roy', email: 'jason@gmail.com' },
        { name: 'Joe Root', email: 'joe@gmail.com' }]
    };

    componentDidMount() {
        let {defaultItems} = this.state;
       
        this.setState({
            itemsInList: defaultItems
        });
    }

    onSelect =(name) =>{
     
let {itemsInList,selectedItems} = this.state;
let selectedItem = itemsInList.find((item) => item.name===name);
itemsInList = itemsInList.filter((item)=>item.name!==name); 
 selectedItems.push(selectedItem.name);
this.setState({selectedItems, itemsInList, inputText:''});

    }

    remove =(name) =>{
  
let {itemsInList,selectedItems, defaultItems} = this.state;
let removedItemName = selectedItems.find((item) => item===name);

selectedItems = selectedItems.filter((item)=>item!==name); 
const removedItem = defaultItems.find(item=>item.name===removedItemName);
 itemsInList.push(removedItem);
this.setState({selectedItems, itemsInList, inputText:''});

    }
    handleChange =(e) =>{
   
        this.setState({inputText:e.target.value});

    }
    showList =()=>{
this.setState({showListItems:true});
    }

    renderSelectedItems = () => {
        const { selectedItems, keyCount } = this.state;
        const length = selectedItems.length;
     
        return (
            <div className="row-flex">
                {selectedItems.map((item, index) => (
                    <Chip keyValue={item} flag={keyCount===1 && index ===length -1} title={item} onClick={this.remove} />
                ))}
            </div>
        );
    };
    delete =(e)=>{
      if(e.key==='Backspace' && this.state.selectedItems.length && this.state.keyCount ===0){
 
          this.setState(prevState =>({keyCount:prevState.inputText.length?0:1}));
      }
      if(e.key==='Backspace' && this.state.selectedItems.length && this.state.keyCount ===1){
        let {selectedItems, defaultItems, itemsInList}= this.state;
      let removedItem =   selectedItems.pop();

      const addItemToList = defaultItems.find(item=>item.name===removedItem);
 itemsInList.push(addItemToList);
        this.setState({selectedItems,itemsInList, keyCount:0});
    }
    }

    render() {
        const { itemsInList, inputText, showListItems, keyCount } = this.state;
      
        const list = itemsInList
        .filter(item => inputText === '' || (item.name.toLowerCase().includes(inputText.toLowerCase()) || item.email.includes(inputText)))

        return (
            <div>
                <div className="row-flex">
                    {this.renderSelectedItems()}
                    <input  onFocus={this.showList} onKeyDown={this.delete} onChange={this.handleChange} className="input" />
                </div>
                <div className="input-container" />

                {showListItems && <Dropdown keyCount={keyCount}  items={list} onClick={this.onSelect} />}
            </div>
        );
    }
}

export default CustomInput;
