import { Switch, Case, Default } from "./Switch";
import { If } from "./If";
import { For } from "./For";

export const DirectivesExample = () => {

  return (
    <>
      <h1>Directives Example</h1>

      <h2>If Directive</h2>
      <If condition={true}>
        <p>This is true!</p>
      </If>
      <If condition={false} else={<p>This is and else statement!</p>} />

      <h2>For Directive</h2>
      <For items={[1, 2, 3]}>
        {(item) => <div key={item}>Item: {item}</div>}
      </For>
      <For items={1}>{(item) => <div key={item}>Single Item: {item}</div>}</For>

      <h2>Switch Directive</h2>
      <Switch condition="case1">
        <Case condition="case1">Case 1</Case>
        <Case condition="case2">Case 2</Case>
        <Default>Default Case</Default>
      </Switch>
    </>
  );
};
