function Hello(){

  let myName = 'Mayank';
  let fullName = ()=>{
    return 'Mayank Agrawal'
  }
  let number = 456;
  return <h3>
    MessageNo: {number} I am your master {fullName()}
  </h3>
}

export default Hello;