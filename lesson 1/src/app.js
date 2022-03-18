const Pet = (props) =>{
  return (
      React.createElement('div',{},[
          React.createElement('h1',{},props.name),
          React.createElement('h2',{},props.animal),
          React.createElement('h3',{},props.breed),
      ])
  )
}
const App = () => {
  return React.createElement(
    'div',
      {},
      [
        React.createElement('h1', {id:"brand"}, 'Adopt Me!'),
        React.createElement(Pet,{name:'Mittens', animal:'cat', breed:'tabby'}),
        React.createElement(Pet,{name:'Molly', animal:'dog', breed:'lab'}),
        React.createElement(Pet,{name:'Milo', animal:'dog', breed:'beagle'}),
      ]
  );
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));
