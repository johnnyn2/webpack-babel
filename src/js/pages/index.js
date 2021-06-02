import $ from 'jquery'
import constants from '../../util/constants'
import '../../css/index.scss'

$(() => {
  const { prefix } = constants
  $('#sum').on('click', e => {
    const a = Number($('#a').val())
    const b = Number($('#b').val())
    const r = a + b
    $('#result').html(prefix + r)
    const point = {
      x: 4,
      y: 5
    }
    console.log(point.z.j)
  })
})
