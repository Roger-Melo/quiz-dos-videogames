const Start = ({ state, onClickStart }) =>
  <div className="start">
    <h2>Bem vindo(a) ao Quiz dos Videogames!</h2>
    <h3>{state.apiData.length} questões pra te testar</h3>
    <button onClick={onClickStart} className="btn">Bora começar</button>
  </div>

export { Start }