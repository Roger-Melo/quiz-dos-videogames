const ButtonNext = ({ state, onClickNextQuestion }) =>
  <button onClick={onClickNextQuestion} className="btn btn-ui">
    {state.currentQuestion === state.apiData.length - 1 ? 'Finalizar' : 'Próxima'}
  </button>

export { ButtonNext }