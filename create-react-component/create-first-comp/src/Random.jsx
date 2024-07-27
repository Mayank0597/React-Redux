function Random(){

  let number = Math.round(Math.random() *100);

  return <h1 style={{'backgroundColor':"pink"}}>
    Random Number is : {number}
  </h1>
}

export default Random;