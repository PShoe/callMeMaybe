
export default function clockUpdate () {

  this.setState({
    current_time: moment().format('MMMM Do YYYY, h:mm:ss a')
  })


}
