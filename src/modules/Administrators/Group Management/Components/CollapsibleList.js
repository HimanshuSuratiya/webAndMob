import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";


const data = [
  {id: 1, name: 'Level 1 a'},
  {
    id: 2, name: 'Level 1 b', list: [
      {id: 1, name: 'Level 2 a'},
      {id: 2, name: 'Level 2 b'},
      {id: 3, name: 'Level 2 c'},
      {
        id: 4, name: 'Level 2 d', list: [
          {id: 1, name: 'Level 3 a'},
          {
            id: 2, name: 'Level 3 b', list: [
              {id: 1, name: 'Level 4 a'},
              {id: 2, name: 'Level 4 b'},
            ]
          },
          {id: 3, name: 'Level 3 c'},
        ]
      },
      {id: 5, name: 'Level 2 e'},
    ]
  },
  {id: 3, name: 'Level 1 c'},
]

export default class CollapsibleList extends React.Component {
  render() {
    return (
      <div>
        <List component="nav" aria-labelledby="nested-list-subheader">
          {data.map(el => {
            return <CustomizedListItem doc={el}/>
          })}
        </List>
      </div>
    );
  }
}

class CustomizedListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  }

  render() {
    const {doc} = this.props;
    return (
      <div style={{backgroundColor: 'grey'}}>
        <ListItem button key={doc.id} onClick={this.handleClick}>
          <ListItemText primary={doc.name}/>
          {doc.list && (this.state.open ? <ExpandLess/> : <ExpandMore/>)}
        </ListItem>
        {doc.list && <Collapse
          key={doc.id}
          in={this.state.open}
          timeout="auto"
          unmountOnExit
          style={{paddingLeft: '30px'}}
        >
          <List component="li" disablePadding key={doc.id}>
            {doc.list.map((subDoc) => {
              return (
                subDoc.list ? <CustomizedListItemChild subDoc={subDoc}/> :
                  <ListItem button key={subDoc.id}>
                    <ListItemText key={subDoc.id} primary={subDoc.name}/>
                  </ListItem>
              );
            })}
          </List>
        </Collapse>}
        <Divider/>
      </div>
    );
  }
}


class CustomizedListItemChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  }

  render() {
    const {subDoc} = this.props;
    return (
      <div style={{backgroundColor: 'grey'}}>
        <ListItem button key={subDoc.id} onClick={this.handleClick}>
          <ListItemText primary={subDoc.name}/>
          {subDoc.list && (this.state.open ? <ExpandLess/> : <ExpandMore/>)}
        </ListItem>
        {subDoc.list && <Collapse
          key={subDoc.id}
          in={this.state.open}
          timeout="auto"
          unmountOnExit
          style={{paddingLeft: '30px'}}
        >
          <List component="li" disablePadding key={subDoc.id}>
            {subDoc.list.map((item) => {
              return (
                item.list ? <CustomizedListItem doc={item}/> : <ListItem button key={item.id}>
                  <ListItemText key={item.id} primary={item.name}/>
                </ListItem>
              );
            })}
          </List>
        </Collapse>}
        <Divider/>
      </div>
    );
  }
}
