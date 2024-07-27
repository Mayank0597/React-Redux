let CurrentTime = () => {

  let time = new Date();
  return <p class="fs-2">
    This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
  </p>
}

export default CurrentTime;