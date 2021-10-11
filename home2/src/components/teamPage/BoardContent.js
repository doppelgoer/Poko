export default function BordContent() {
  return (
    <div
      style={{
        background: '#7b5e57',
        display: 'flex',
        borderRadius: '0.5rem',
        marginTop: '1vh',
        width: '92vw',
      }}
    >
      <div>
        <div
          style={{
            background: 'white',
            border: '1px solid black',
            margin: '1.5vh 1vw 0vh 1vw',
            width: '90vw',
          }}
        >
          제목:
        </div>
        <div
          style={{ background: 'brown', float: 'right', marginRight: '1vw' }}
        >
          ddd
        </div>
        <div
          style={{
            background: 'pink',
            border: '1px solid black',
            margin: '3.5vh 1vw 2vh 1vw',
          }}
        >
          ㅇㄴㅇㄴ
          <br /> ㅇㄴㅇㄴㅇ
          <br /> ㄴㅇ ㄴㅇㅇㄴ
        </div>
      </div>
    </div>
  );
}
