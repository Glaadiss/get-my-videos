import * as React from "react";
import * as Autosuggest from "react-autosuggest";
import match = require("autosuggest-highlight/match"); // tslint:disable-line
import parse = require("autosuggest-highlight/parse"); // tslint:disable-line
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { WithStyles, createStyles } from "@material-ui/core";
import { Suggestion } from "./index";

type SuggestionOptions = { query: string; isHighlighted: boolean };

type Parts = Array<{ text: string; highlight: boolean }>;

type AutosuggestProps = WithStyles & {
  suggestions: Suggestion[];
  value: string;
  handleChange: (_: any, newValue: any) => void;
  handleSuggestionsFetchRequested: (value: any) => void;
  handleSuggestionsClearRequested: () => void;
};

function renderSuggestionsContainer(options: any) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion: Suggestion) {
  return suggestion.label;
}

function renderSuggestion(
  suggestion: Suggestion,
  { query, isHighlighted }: SuggestionOptions
) {
  const matches = match(suggestion.label, query);
  const parts: Parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderInput(inputProps: any) {
  const { classes, ref, ...other } = inputProps;
  console.warn(inputProps);
  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input
        },
        ...other
      }}
    />
  );
}

const styles = (theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 2,
      position: "relative",
      height: "fit-content",
      padding: "10px",
      background: "#fff"
    },
    suggestionsContainerOpen: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    suggestion: {
      display: "block"
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: "none"
    }
  });

const SearchInputView = (props: AutosuggestProps) => {
  return (
    <Autosuggest
      theme={{
        container: props.classes.container,
        suggestionsContainerOpen: props.classes.suggestionsContainerOpen,
        suggestionsList: props.classes.suggestionsList,
        suggestion: props.classes.suggestion
      }}
      renderInputComponent={renderInput}
      suggestions={props.suggestions}
      onSuggestionsFetchRequested={props.handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={props.handleSuggestionsClearRequested}
      renderSuggestionsContainer={renderSuggestionsContainer}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        classes: props.classes,
        placeholder: "Search a country (start with a)",
        value: props.value,
        onChange: props.handleChange
      }}
    />
  );
};

const View = withStyles(styles)(SearchInputView);
export default View;
