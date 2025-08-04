import { InlineButton } from "./demo-styles/inline/InlineStyleDemo";
import { SassModuleButton } from "./demo-styles/sass-module/SassModuleDemo";
import { StyledButton } from "./demo-styles/styled-components/StyledComponentsDemo";
import { TailwindButton } from "./demo-styles/tailwind/TailwindDemo";

function App() {
  return (
    <div>
      <InlineButton>Inline button</InlineButton>
      <SassModuleButton>Sass Module</SassModuleButton>
      <StyledButton>Styled Components</StyledButton>
      <TailwindButton>Tailwind</TailwindButton>
    </div>
  );
}

export default App;
