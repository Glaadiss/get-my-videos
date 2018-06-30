import * as React from "react";

import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

class CheckboxListSecondary extends React.Component {
  public render() {
    return (
      <List>
        {[0, 1, 2, 3].map(value => (
          <ListItem key={value} dense={true} button={true}>
            <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />
            <ListItemText primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default CheckboxListSecondary;
