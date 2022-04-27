import * as React from "https://cdn.skypack.dev/react@17.0.1";
import './App.css';
import * as marked from "https://cdn.skypack.dev/marked@4.0.14";

const renderer = new marked.Renderer();

marked.setOptions({
  breaks: true,
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(e) {
      this.setState({
        markdown: e.target.value
      });
    }
  
  render() {
    return (<div id="main-box" className="center">
        <h1 className="sub-title">Markdown Previewer</h1> 
        <p className="sub-title">Editor</p>
        <div id="editor section">
        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <p className="sub-title">Previewer</p>
        <div className  ="previewStyle">
          <Preview markdown={this.state.markdown}/>
        </div>
      </div>
    );    
  }
}

const Editor = (props) => {
  return (
    <textarea className="editorStyle"
      id="editor"
      onChange={props.onChange}
      type="text"
      value={props.markdown}
    />
  );
};


const Preview = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked.parse(props.markdown, { renderer: renderer })
      }}
      id="preview"
    />
  );
};


const placeholder = `# React Markdown Previewer!

## This is a sub-heading

There's also [links](https://www.freecodecamp.org).

Heres what code looks like \`<div></div>\`, between 2 backticks.

\`\`\`
// Multi-line code:

def anotherExample(firstLine, lastLine):
  if firstLine == '\`\`\`' && lastLine == '\`\`\`':
    return multiLineCode

\`\`\`

You can  make text **bold**, _italic_, and ~~cross things out~~

- There are lists.
  - Bulleted.
     - With different indents.


1. You can also have numbered lists

`;
export default App;
