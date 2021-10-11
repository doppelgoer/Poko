import { useEffect, useState } from 'react'

export default function Test() {
  // console.log('App 렌더링')
  const [appState, setAppState] = useState(0)
  const [app2State, setApp2State] = useState(100)
  useEffect(() => {
    console.log('appState가 바뀜, 리렌더링~!')
  }, [appState])
  useEffect(() => {
    console.log('app2State가 바뀜, 리렌더링~!')
  }, [app2State])
  // useEffect(() => {
  //   // console.log(1111111)
  // })
  // console.log(1111)
  return (
    <div
      style={{
        width: '100%',
        height: '4vh',
        background: 'black',
        padding: '1vh',
        marginBottom: '10px',
      }}
    >
      <button
        onClick={() => (
          setAppState(appState + 1), console.log('버튼 눌럿나', appState)
        )}
      >
        AppBtn
      </button>
      <button
        onClick={() => (
          setApp2State(app2State + 100), console.log('버튼 눌럿나2', app2State)
        )}
      >
        AppBtn2
      </button>
    </div>
  )
}
