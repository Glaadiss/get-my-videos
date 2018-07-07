import * as React from "react";
import View from "./View";
import { connect } from "react-redux";
import { Actions } from "../../services/actions/suggestions";
import { Suggestion } from "../../services/gapi/responseTypings";
export type Suggestion = Suggestion;

type AutosuggestProps = {
  getSuggestions: (value: string) => void;
  suggestions: Suggestion[];
  currentValue: string;
  changeSuggestionValue: (value: string) => void;
};

const SearchInput = (props: AutosuggestProps) => {
  const handleSuggestionsFetchRequested = () => {
    props.getSuggestions(props.currentValue);
  };

  const handleSuggestionsClearRequested = () => {
    //
  };

  const handleChange = (_: any, { newValue }: { newValue: string }) => {
    props.changeSuggestionValue(newValue);
  };

  const { suggestions, currentValue } = props;

  return (
    <View
      value={currentValue}
      suggestions={suggestions}
      handleChange={handleChange}
      handleSuggestionsClearRequested={handleSuggestionsClearRequested}
      handleSuggestionsFetchRequested={handleSuggestionsFetchRequested}
    />
  );
};

type StateToProps = {
  suggestions: { suggestions: object[]; currentValue: string };
};

const mapStateToProps = (state: StateToProps) => {
  const { suggestions, currentValue } = state.suggestions;
  return { suggestions, currentValue };
};

const mapDispatchToProps = (dispatch: any) => ({
  getSuggestions: (q: string) => dispatch(Actions.getSuggestions({ q })),
  changeSuggestionValue: (q: string) =>
    dispatch(Actions.changeSuggestionValue(q))
});

const ConnectedInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);

export default ConnectedInput;
