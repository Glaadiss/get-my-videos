import * as React from "react";
import View from "./View";
export type Suggestion = { label: string };

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" }
];

function getSuggestions(value: string) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

type AutosuggestState = {
  value: string;
  suggestions: Suggestion[];
};

class SearchInput extends React.Component<{}, AutosuggestState> {
  public state = {
    value: "",
    suggestions: []
  };

  public handleSuggestionsFetchRequested = ({ value }: { value: string }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  public handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  public handleChange = (_: any, { newValue }: { newValue: string }) => {
    this.setState({
      value: newValue
    });
  };

  public render() {
    const { value, suggestions } = this.state;
    return (
      <View
        value={value}
        suggestions={suggestions}
        handleChange={this.handleChange}
        handleSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
      />
    );
  }
}

export default SearchInput;
